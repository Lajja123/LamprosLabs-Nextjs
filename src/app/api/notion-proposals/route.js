import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Helper function to extract only text from cell content
function extractCellContent(cell) {
  if (!cell || cell.length === 0) return '';
  return cell[0].plain_text || '';
}

// Helper function to extract table data from blocks
async function extractTableData(blocks) {
  const monthTables = [];
  
  for (const block of blocks) {
    if (block.type === 'toggle' && block.has_children) {
      const monthMatch = block.toggle.rich_text[0].text.content.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/);
      
      if (monthMatch) {
        const monthData = {
          month: monthMatch[1],
          year: monthMatch[2],
          proposals: []
        };
        
        const tableBlocks = await getAllBlocksRecursively(block.id);
        const tableBlock = tableBlocks.find(b => b.type === 'table');
        
        if (tableBlock) {
          const rows = await notion.blocks.children.list({
            block_id: tableBlock.id
          });
          
          // Get header row to use as keys
          let headers = [];
          if (rows.results.length > 0) {
            headers = rows.results[0].table_row.cells.map(cell => 
              extractCellContent(cell) || 'unnamed_column'
            );
          }
          
          // Process data rows
          for (let i = 1; i < rows.results.length; i++) {
            const row = rows.results[i];
            if (row.type === 'table_row') {
              const rowData = {};
              
              // Process each cell in the row
              row.table_row.cells.forEach((cell, index) => {
                const headerKey = headers[index] || `column${index}`;
                rowData[headerKey] = extractCellContent(cell);
              });
              
              monthData.proposals.push(rowData);
            }
          }
        }
        
        monthTables.push(monthData);
      }
    }
  }
  
  return monthTables;
}

// Get All Block Contents Recursively
async function getAllBlocksRecursively(blockId) {
  const blocks = [];
  let cursor;

  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    blocks.push(...results);

    if (!next_cursor) break;
    cursor = next_cursor;
  }

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.has_children) {
      block.children = await getAllBlocksRecursively(block.id);
    }
  }

  return blocks;
}

// Main API Handler
export async function GET() {
  if (!process.env.NOTION_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Notion API key is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const page_id = process.env.NEXT_PUBLIC_NOTION_PAGE_ID?.replace(/-/g, "");

    if (!page_id) {
      return new Response(
        JSON.stringify({ error: "Page ID or Database ID is not configured" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const blocks = await getAllBlocksRecursively(page_id);
    const monthlyData = await extractTableData(blocks);

    // Sort by date (newest first)
    monthlyData.sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateB - dateA;
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: monthlyData
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Notion API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch Notion data",
        details: error.message,
        code: error.code,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}