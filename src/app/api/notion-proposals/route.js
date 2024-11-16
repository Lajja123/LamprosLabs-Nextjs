// app/api/notion/route.js
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request) {
  try {
    const { database_id } = await request.json();

    const response = await notion.databases.query({
      database_id: database_id,
      sorts: [
        {
          property: 'End Date',
          direction: 'descending',
        },
      ],
    });

    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Notion API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch Notion data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}