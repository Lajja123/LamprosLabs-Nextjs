// app/api/fetch-comment/route.js
import { NextResponse } from 'next/server';
import { load } from 'cheerio';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { error: "URL parameter is required" },
        { status: 400 }
      );
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch comment: ${response.statusText}`);
    }

    const html = await response.text();
    
    // Using cheerio to parse the HTML and extract comment content
    const $ = load(html);
    
    // This selector needs to be adjusted based on your forum's HTML structure
    // Example for Discourse forums:
    const commentContent = $('.cooked').first().text().trim();
    
    // If no content is found, return a fallback message
    if (!commentContent) {
      return NextResponse.json({ 
        content: "Comment content could not be extracted" 
      });
    }

    return NextResponse.json({ content: commentContent });

  } catch (error) {
    console.error('Error fetching comment:', error);
    return NextResponse.json(
      { error: "Failed to fetch comment", details: error.message },
      { status: 500 }
    );
  }
}