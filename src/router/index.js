import Vue from 'vue'
import Router from 'vue-router'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Home from '../components/Home'
import Create from '../components/Create'
import About from '../components/About'

Vue.use(Router)
Vue.use(vuetify)

export default new Router({
  routes: [
    {
      component: Home,
      name: 'Home',
      path: '/'
    },
    {
      component: Create,
      name: 'Create',
      path: '/create'
    },
    {
      component: About,
      name: 'About',
      path: '/about'
    }
  ]
})
