import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

function extractCellContent(cell) {
  if (!cell || cell.length === 0) return '';
  return cell[0].plain_text || '';
}

async function extractTableData(blocks, label) {
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
          
          let headers = [];
          if (rows.results.length > 0) {
            headers = rows.results[0].table_row.cells.map(cell => 
              extractCellContent(cell) || 'unnamed_column'
            );
          }
          
          for (let i = 1; i < rows.results.length; i++) {
            const row = rows.results[i];
            if (row.type === 'table_row') {
              const rowData = {};
              
              row.table_row.cells.forEach((cell, index) => {
                const headerKey = headers[index] || `column${index}`;
                rowData[headerKey] = extractCellContent(cell);
              });
              
              // Add the label to the row data
              rowData["Type"] = label;
              monthData.proposals.push(rowData);
            }
          }

          // Sort proposals by Sr. No. in descending order
          monthData.proposals.sort((a, b) => {
            const srNoA = parseInt(a['Sr. No.'] || '0', 10);
            const srNoB = parseInt(b['Sr. No.'] || '0', 10);
            return srNoB - srNoA; // Descending order
          });
        }
        
        monthTables.push(monthData);
      }
    }
  }
  
  return monthTables;
}

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

// Helper function to combine and sort monthly data
function combineAndSortMonthlyData(monthlyData1, monthlyData2) {
  // Create a map to store combined proposals by month/year
  const monthMap = new Map();

  // Helper function to parse date string in DD/MM/YYYY format
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split('/');
    // Create date in YYYY-MM-DD format for reliable parsing
    return new Date(`${year}-${month}-${day}`);
  };

  // Process all data from both arrays
  [...monthlyData1, ...monthlyData2].forEach(monthData => {
    const key = `${monthData.year}-${monthData.month}`;
    if (!monthMap.has(key)) {
      monthMap.set(key, {
        month: monthData.month,
        year: monthData.year,
        proposals: []
      });
    }
    // Add proposals to the existing month entry
    monthMap.get(key).proposals.push(...monthData.proposals);
  });

  // Convert map back to array
  const combinedData = Array.from(monthMap.values());

  // Sort months in descending order
  combinedData.sort((a, b) => {
    const dateA = new Date(`${a.month} 1, ${a.year}`);
    const dateB = new Date(`${b.month} 1, ${b.year}`);
    return dateB - dateA;
  });

  // Sort proposals within each month by Start Date
  combinedData.forEach(monthData => {
    monthData.proposals.sort((a, b) => {
      const dateA = parseDate(a['Start Date']);
      const dateB = parseDate(b['Start Date']);
      
      // Handle cases where dates are invalid or missing
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;  // Push items without dates to the end
      if (!dateB) return -1;
      
      return dateB - dateA;  // Descending order
    });

    // Filter out empty proposals
    monthData.proposals = monthData.proposals.filter(proposal => 
      Object.values(proposal).some(value => value !== '')
    );
  });

  return combinedData;
}

export async function GET() {
  if (!process.env.NOTION_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Notion API key is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const page_id1 = process.env.NEXT_PUBLIC_NOTION_PAGE_ID?.replace(/-/g, "");
    const page_id2 = process.env.NEXT_PUBLIC_NOTION_PAGE_ID2?.replace(/-/g, "");

    if (!page_id1 || !page_id2) {
      return new Response(
        JSON.stringify({ error: "One or both Page IDs are not configured" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Fetch data from both pages in parallel
    const [blocks1, blocks2] = await Promise.all([
      getAllBlocksRecursively(page_id1),
      getAllBlocksRecursively(page_id2)
    ]);

    // Process both sets of data in parallel with respective labels
    const [monthlyData1, monthlyData2] = await Promise.all([
      extractTableData(blocks1, "Offchain Voting"),
      extractTableData(blocks2, "Onchain Voting")
    ]);

    // Combine and sort the data from both pages
    const combinedSortedData = combineAndSortMonthlyData(monthlyData1, monthlyData2);

    return new Response(
      JSON.stringify({
        success: true,
        data: combinedSortedData
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
