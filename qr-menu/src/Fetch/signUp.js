//install docker 
//after downaload IMG by write command in Terminal: docker run --name qr --rm -d -p 8000:8080 dchnkoo/qr-sys:stage-version-up
// and it is possible work with server 
const URL = 'http://localhost:8000/api/admin/register'
const data = {
    'email': "aa@gmail.com",
    'password': "122jfjfj",
    'time': {
      'type': "days",
      'number': 1
    }
  }

const options = {
    'method': 'POST', // HTTP method
    'headers': {'Content-Type': 'application/json' // Content type of the request body
      },
    'body': JSON.stringify(data) // Convert JavaScript object to JSON string
  };
 export async function postData() {
   // console.log(options.body);
   fetch(URL, options)
    .then(response => {
      if (!response.ok) {
        console.log(JSON.stringify(data))
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      console.log('POST request successful:', data); // Handle the successful response
    })
    .catch(error => {
      console.error('There was a problem with the POST request:', error); // Handle any errors that occurred during the fetch
    });
  }
  