import { priv } from './priv'

priv.apiKeys.gmap = ( 
  process.env.NODE_ENV == 'development' ? priv.apiKeys.gmap.dev :
    ( process.env.NODE_ENV == 'production' ? priv.apiKeys.gmap.prod :
      priv.apiKeys.gmap.test
    )
)

priv.baseURL = ( process.env.NODE_ENV == 'test' ? priv.testURL : '' )

const config = {
  apiKeys: priv.apiKeys,
  baseURL: priv.baseURL
}

export default config