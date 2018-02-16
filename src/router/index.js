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

Vue.use(Router)
Vue.use(vuetify)
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
    {
      component: Login,
      name: 'Login',
      path: '/login'
    },
    {
      component: SignUp,
      name: 'SignUp',
      path: '/signup'
    },
    {
      component: PrivacyPolicy,
      name: 'Privacy',
      path: '/privacy'
    }
  ]
})
