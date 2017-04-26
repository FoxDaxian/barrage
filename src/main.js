import Vue from 'vue'
import App from './App'

import barrage from "vue2-barrage";
Vue.use(barrage);


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
