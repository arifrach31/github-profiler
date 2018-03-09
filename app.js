let https = require('https')

const options = {
  hostname: "api.github.com",
  port: 443,
  patch: "/users/arifrachcom",
  method: "GET",
  headers: {
    'user-agent': 'arifrachcom'
  }
}

let request = https.request(options, (result)=> {
  console.log('Get Response', result.statusCode)
})

request.on('error', (e) => {
  console.error(e)
})

request.end();
