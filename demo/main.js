import Vue from 'vue'
import App from './App.vue'

import Ads from 'vue-google-adsense'
import VueHighlightJS from 'vue-highlightjs'

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.use(VueHighlightJS)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
