import apiKeys from './apiKeys'

let config = {
  apiKeys: apiKeys,
  testURL: ( process.env.NODE_ENV == 'test' ? 'http://localhost:8080' : '' )
}

export default config