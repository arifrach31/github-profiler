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

let request = https.request(options, (response)=> {
  let body = ''

  response.on('data', (data)=> {
    body = body + data
  })
  response.on('end', ()=> {
    console.log(body)
  })
})

request.on('error', (e) => {
  console.error(e)
})

request.end();
