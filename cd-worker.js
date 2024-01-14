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
    } else if (provider === "4") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "5") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "6") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "7") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "8") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "9") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "10") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "11") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "12") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "13") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "14") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "15") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "16") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "17") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "18") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "19") {
        // Replace '{}' with your JSON body
        jsonData = {
       };
    } else if (provider === "20") {
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
  
