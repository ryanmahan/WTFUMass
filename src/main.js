// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import config from '../keys'

require("../node_modules/firebaseui/dist/firebaseui.css")

Vue.config.productionTip = false

let mixin = Vue.mixin({
  methods: {
    logged: function () {
      if (localStorage.user) {
        return JSON.parse(localStorage.user)
      } else {
        return false
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
  components: { App },
  created() {
    firebase.initializeApp(config);
  }
})