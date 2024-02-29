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

      const request = await fetch(url, obj);
      console.log(request.ok)
      if (!request.ok) return request.ok;
    
      const response = await request.json();
    console.log(response)
      return response;
  

}
