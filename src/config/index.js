import keys from './keys'

let config = {
  keys: keys,
  testURL: ( process.env.NODE_ENV == 'test' ? 'http://localhost:8080' : '' )
}

export default config