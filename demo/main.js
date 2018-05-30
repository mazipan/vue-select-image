import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

Vue.use(VueHighlightJS)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
