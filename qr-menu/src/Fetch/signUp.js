// install docker 
// after downaload IMG by write command in Terminal: docker-compose up -d 
// and wait a minute while api is started
// and it is possible work with server 

export const obj = (method, body, headers = {"Content-type": "application/json"}) => {
  return {method: method,
          headers: headers,
          credentials: "include",
          body: JSON.stringify(body)}
}

export async function apiRequest(url, obj) {
  try {
      const request = await fetch(url, obj);
      
      if (!request.ok) throw new Error(`status: ${request.status}, body: ${request.body}`);
    
      const response = await request.json();
    
      return response;
  } catch (error) {
      throw new Error(error);
  }

}
