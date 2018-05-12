import Vue from 'vue'
import Router from 'vue-router'
import vuetify from 'vuetify'
import VueCookie from 'vue-cookie'
import 'vuetify/dist/vuetify.min.css'

import Home from '../components/Home'
import Create from '../components/Create'
import About from '../components/About'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Tutorial from '../components/Tutorial'
import PrivacyPolicy from '../components/PrivacyPolicy'

import keys from '../../keys.js'

Vue.use(Router)

import GoogleAuth from 'vue-google-auth'

Vue.use(GoogleAuth, { clientId: '449186400081-j47ll0hkuftmp0qv39n1k2vmduco7e0b.apps.googleusercontent.com', key: keys.gsecret })
Vue.googleAuth().load()

Vue.use(vuetify, {
  theme: {
    primary: '#800000',
    secondary: '#d3d3d3',
    accent: '#748798',
    error: '#b71c1c'
  }
})
Vue.use(VueCookie)

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
    },
    // {
    //   component: Login,
    //   name: 'Login',
    //   path: '/login'
    // },
    // {
    //   component: SignUp,
    //   name: 'SignUp',
    //   path: '/signup'
    // },
    {
      component: PrivacyPolicy,
      name: 'Privacy',
      path: '/privacy'
    },
    //TEST PATHS BELOW
    {
      component: Tutorial,
      name: 'Tutorial',
      path: '/tutorial'
    }
  ]
})
