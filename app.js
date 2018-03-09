let profile = require('./profile.js')
let profiles = ['arifrachcom', 'rizafahmi']
profiles.map(user => {
  return profile.get(user)
})
