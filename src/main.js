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
    if(user === null){
      alert('you must log in to do that')
    } else {
      return JSON.parse(user)
    }
  }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mixins: [mixin],
  template: '<App/>',
  components: { App }
})