const fetch = require('node-fetch')
const { auth: authBody } = require('../../config')
let data = {}

const configRequest = {
  method: 'POST',
  body: JSON.stringify(authBody),
  headers: { 'Content-Type': 'application/json' }
}

function retrieveToken (data) {
  return data.accessToken
}

function setToken (responseToken) {
  data.token = responseToken
}

function getToken () {
  return data.token
}

function makeAuthRequest (url, options = {}) {
  options.headers = {
    'Authorization': 'Bearer ' + data.token,
    'Content-Type': 'application/json'
  }
  return fetch(url, options)
}

function requestToken () {
  return fetch('https://api.beta.partstech.com/oauth/access', configRequest)
    .then(response => response.json())
    .then(retrieveToken)
    .then(setToken)
    .then(getToken)
}

module.exports = {
  requestToken,
  makeAuthRequest
}
