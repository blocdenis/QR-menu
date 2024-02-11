// install docker 
// after downaload IMG by write command in Terminal: docker-compose up -d 
// and wait a minute while api is started
// and it is possible work with server 
import Cookies from "js-cookie";
import { COOKIE_KEY } from "./settings";

export const COOKIE_HEADERS = {"Cookie": `${COOKIE_KEY}=${Cookies.get(COOKIE_KEY)}`}

export const obj = (method, body, headers = {"Content-type": "application/json"}, cookie = true) => {
  const data = {method: method,
              credentials: "include",
              body: JSON.stringify(body)}

  if (cookie) data.headers = {...headers, ...COOKIE_HEADERS};
  else data.headers = headers;

  return data
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
