import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY
});

export async function GET() {
  if (!process.env.NOTION_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Notion API key is not configured' }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Remove any hyphens from the page ID if they exist
    const page_id = process.env.NEXT_PUBLIC_NOTION_PAGE_ID?.replace(/-/g, '');
    
    if (!page_id) {
      return new Response(
        JSON.stringify({ error: 'Page ID is not configured' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // First get the page content
    const pageResponse = await notion.pages.retrieve({
      page_id: page_id
    });

    // Then get the page blocks (actual content)
    const blocksResponse = await notion.blocks.children.list({
      block_id: page_id,
      page_size: 100, // Adjust based on your needs
    });

    // Combine the data
    const response = {
      page: pageResponse,
      blocks: blocksResponse.results
    };

    return new Response(
      JSON.stringify(response), 
      { 
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Notion API Error:', error);
    
    const errorMessage = error.code === 'unauthorized' 
      ? 'Invalid Notion API token or insufficient permissions'
      : error.code === 'object_not_found'
      ? 'Page not found or not shared with integration. Please check your page ID and integration settings.'
      : 'Failed to fetch Notion data';
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error.message,
        code: error.code
      }), 
      { 
        status: error.code === 'unauthorized' ? 401 : 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}