//install docker 
//after downaload IMG by write command in Terminal: docker run --name qr --rm -d -p 8000:8080 dchnkoo/qr-sys:stage-version-up
// and it is possible work with server 
const URL = 'http://localhost:8000/api/admin/register'
export async function postData(formValues) {
  const dataIn = {
    'email': formValues.email,
    'password': formValues.password,
    'time': {
      'type': "days",
      'number': 1
    }
  }
const options = {
    'method': 'POST', // HTTP method
    'headers': {'Content-Type': 'application/json' // Content type of the request body
      },
    'body': JSON.stringify(dataIn) // Convert JavaScript object to JSON string
  };
  const response1 = await fetch(URL, options)
    .then(response => {
      if (!response.ok) {
        console.log(JSON.stringify(data))
        throw new Error('Network response was not ok');
      }
     return response.json(); // Parse the JSON response
    })
    .then(data => {
      console.log('POST request successful:', data); // Handle the successful response
   return data;
    })
    .catch(error => {
      console.error('There was a problem with the POST request:', error); // Handle any errors that occurred during the fetch
    });
console.log(response1)
const results  = await response1;
return results.token;

  }
  