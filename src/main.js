// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import AsyncComputed from 'vue-async-computed'
import * as VueGoogleMaps from 'vue2-google-maps'
import config from './config'

Vue.config.productionTip = false

Vue.use(AsyncComputed) 
Vue.use(VueGoogleMaps, { 
  load: {
    key: config.gmapKey,
  },
})

Vue.component('google-map', VueGoogleMaps.Map)  
Vue.component('gmap-marker',VueGoogleMaps.GmapMarker)

/* eslint-disable no-new */
new Vue({
  el: '#metro',
  components: { App },
  template: '<App/>'
})
