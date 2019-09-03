# metro

> Metro Transit with Google Maps and Vue

## Installation

```bash
# install dependencies
npm install
```

## Private Configuration

Create a file `src/config/priv.js` containing the following code:

```javascript
export const priv = { 
  testURL: 'http://localhost:8080', // URL of app for testing
  apiKeys: {
    nycmta: 'YOUR-API-KEY',
    sfbart: 'YOUR-API-KEY',
    gmap: {
      dev: 'YOUR-DEV-API-KEY',   // Restrict this API key to developer IP addresses
      prod: 'YOUR-PROD-API-KEY', // Restrict this API key to production doman
      test: 'YOUR-TEST-API-KEY'  // Do not restrict this API key for GitHub Actions
    }
  }
}
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

## CI/CD

This repository uses [GitHub Actions](https://github.com/features/actions) for CI/CD. Workflows can be found at [`.github/workflows`](.github/workflows). The workflows require two secret variables `priv` and `privBuild` to be created in the GitHub repository settings. `priv` should contain the contents of the private configuration file `src/config/priv.js`. `privBuild` should also contain `src/config/priv.js` but without `testURL`, `gmap.dev`, and `gmap.test`.
