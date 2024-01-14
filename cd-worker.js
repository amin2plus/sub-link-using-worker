async function handleRequest(request) {
    const url = new URL(request.url);
    const provider = url.searchParams.get("subs");
  
    let jsonData;
  
    if (provider === "1st") {
      // Replace '{}' with your JSON body
      jsonData = {
      };
    } else if (provider === "2nd") {
      // Replace '{}' with your JSON body
      jsonData = {
     };
    } else if (provider === "3rd") {
      // Replace '{}' with your JSON body
      jsonData = {
     };
    }
  
    if (!jsonData) {
      return new Response("Invalid provider", {
        status: 400,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  
    const responseText = JSON.stringify(jsonData, null, 2);
    
    // Use TextEncoder for a more reliable encoding
    const encoder = new TextEncoder();
    const encodedResponse = encoder.encode(responseText);
  
    return new Response(encodedResponse, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
