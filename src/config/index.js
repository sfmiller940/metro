//import apiKeys from './apiKeys'

let apiKeys = {}
if(process.env.apiKeys){
  apiKeys = JSON.parse(process.env.apiKeys)
}
else{
  apiKeys = require('./apiKeys').default
}

const config = {
  apiKeys: apiKeys,
  testURL: 'http://www.poibella.org'
}

export default config