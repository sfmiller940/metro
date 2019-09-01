//import apiKeys from './apiKeys'

let apiKeys = {}
if($apiKeys){
  apiKeys = JSON.parse($apiKeys)
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