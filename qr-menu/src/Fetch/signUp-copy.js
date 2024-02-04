//install docker 
//after downaload IMG by write command in Terminal: docker run --name qr --rm -d -p 8000:8080 dchnkoo/qr-sys:stage-version-up

import axios from "axios";

// and it is possible work with server 
axios
const URL = 'http://localhost:8000/api/admin/register'
export async function postData(formValues) {
  const dataIn = {
    'email': formValues.email,
    'password': formValues.password,
    'time': {
      'type': "days",
      'number': 1
    }
  };
  
  const response = axios.post(URL, dataIn, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error('Error during POST request:', error); // Handle errors
  });
  let results = await response.data;
  return results;
}
  