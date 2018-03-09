let https = require('https')

let get = (username) => {
  const options = {
    hostname: "api.github.com",
    port: 443,
    path: `/users/${username}`,
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
      //console.log(body)
      let profile = JSON.parse(body);
      if (response.statusCode === 200) {
        console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers`)
      } else {
        console.log(`Username GitHub ${profile.username} not found`)
      }
    })
  })

  request.on('error', (e) => {
    console.error(e)
  })

  request.end();
}

module.exports = {
  get
}
