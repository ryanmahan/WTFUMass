// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

let mixin = Vue.mixin({
  methods: {
    logged: function () {
    let user = this.$cookie.get('user')
    console.log(user)
    if(user === null){
      return false
    } else {
      return JSON.parse(user)
    }
  }
  }
})

Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mixins: [mixin],
  template: '<App/>',
  components: { App }
})