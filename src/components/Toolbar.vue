<template>
  <v-app>
  <v-toolbar id="bar" dark>
    <router-link to='/'> 
      <v-toolbar-title id="title">
       WTF UMass
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <!-- for smaller screens -->
    <v-menu class="hidden-md-and-up" offset-y close-on-click close>
      <v-btn slot='activator' icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list offset-y>
        <v-list-tile @click='pushHome' flat>Vote on fixes</v-list-tile>
        <v-list-tile @click='pushCreate' flat>Submit a fix</v-list-tile>
        <v-list-tile @click='pushArchive' flat>Archive</v-list-tile>
        <div v-if='loggedIn'>
            <v-list-tile @click='logout()'>
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click='pushAbout()'>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile>
        </div>
      </v-list>
    </v-menu>
    <!-- for larger screens -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn @click='pushCreate' flat>Submit a fix</v-btn>
      <v-btn @click='pushHome' flat>Vote on fixes</v-btn>
      <v-btn @click='pushArchive' flat>Archive</v-btn>
      <v-menu v-if='loggedIn' offset-y close-on-click close-on-content-click open-on-hover>
        <v-btn flat slot='activator'>{{name}}</v-btn>
        <v-list offset-y>
          <v-list-tile @click='logout()'>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click='pushAbout()'>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
  </v-app>
</template>

<style>
#bar {
  background-color: maroon;
  margin-bottom: 2%;
}
#title {
  color: white
}
</style>

<script>

import Login from './Login'

export default {
  name: 'toolbar',
  compnents: {
    Login,
  },
  link: [ {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}, {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'} ],
  data () {
    return {
      user: '',
      name: '',
      loggedIn: false,
      showlogin: false,
    }
  },
  methods: {
    pushCreate () {
      this.$router.push({
        name: 'Create'
      })
    },
    pushArchive () {
      this.$router.push({
        name: 'Archive'
      })
    },
    pushHome () {
      this.$router.push({
        name: 'Home'
      })
    },
    pushAbout () {
      this.$router.push({
        name: 'About'
      })
    },
    pushLogin () {
      this.$router.push({
        name: 'Login'
      })
    },
    pushSettings () {
      this.$router.push({
        name: 'Settings'
      })
    },
    logout () {
      localStorage.removeItem('user')
      this.loggedIn = false
      location.reload()
    }
  },
  created: function () {
    let user = this.logged()
    if (user){
      this.loggedIn = true
      this.user = user      
      this.name = user.fname
    } else {
      this.name = 'Log in'
    }
  },
  mounted: function () {
    this.$bus.$on('user', function (arg) {
      this.name = arg.fname
      this.loggedIn = true
    }.bind(this))
  }
}
</script>