// install docker 
// after downaload IMG by write command in Terminal: docker-compose up -d 
// and wait a minute while api is started
// and it is possible work with server 


export async function apiRequest(url, method, body, headers = {"Content-type": "application/json"}) {
  try {
    const request = await fetch(url, {
      method: method,
      headers: headers,
      credentials: "include" ,
      body: JSON.stringify(body)
    });
    
    if (!request.ok) throw new Error(`status: ${request.status}, body: ${request.body}`);
  
    const response = await request.json();
  
    return response;
  } catch (error) {
    throw new Error(error);
  }

}
