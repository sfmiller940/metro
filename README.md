# metro

> Metro Transit with Google Maps and Vue

## Installation

```bash
# install dependencies
npm install
```

## API Keys

Create a file `src/config/apiKeys.js` containing the following code:

```javascript
const keys = {
  nycmta: 'YOUR-NYC-METRO-API-KEY',
  sfbart: 'YOUR-SANFRAN-BART-API-KEY',
  gmap: ( process.env.NODE_ENV == 'development' 
    ? 'YOUR-DEVELOPMENT-GOOGLE-MAPS-API-KEY' 
    : 'YOUR-PRODUCTION-GOOGLE-MAPS-API-KEY'
  )
}

export default keys
```

## Development Server

```bash
# serve with hot reload at localhost:8080
npm run dev
```
## Production Build

```bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
