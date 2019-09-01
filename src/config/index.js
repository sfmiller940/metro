//import apiKeys from './apiKeys'

let apiKeys = {}
if(process.env.apiKeys){
  apiKeys = JSON.parse(process.env.apiKeys)
}
else{
  apiKeys = require('./apiKeys').default
}

apiKeys.gmap = ( 
  process.env.NODE_ENV == 'development' ? apiKeys.gmap.dev :
    ( process.env.NODE_ENV == 'production' ? apiKeys.gmap.prod :
      apiKeys.gmap.test
    )
)

const config = {
  apiKeys: apiKeys,
  testURL: 'http://www.poibella.org'
}

export default config