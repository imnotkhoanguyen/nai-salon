// Web Vitals analytics endpoint
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Log Web Vitals data
    console.log('Web Vitals:', {
      name: data.name,
      value: data.value,
      timestamp: data.timestamp,
      url: data.url
    });
    
    // Here you could send to your analytics service
    // Example: Send to Google Analytics, Mixpanel, etc.
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Web Vitals API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process Web Vitals data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
