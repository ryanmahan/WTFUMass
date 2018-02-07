<template>
  <v-app>
  <v-toolbar id="bar" dark>
    <v-toolbar-title id="title"> 
      WTF UMass
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn @click='pushCreate' flat>Submit a fix</v-btn>
      <v-btn @click='pushHome' flat>Vote on fixes</v-btn>
      <v-btn v-if='!loggedIn' @click='pushLogin' flat>{{name}}</v-btn>
      <v-menu v-if='loggedIn' offset-y>
        <v-btn flat slot='activator'>{{name}}</v-btn>
        <v-list offset-y>
          <v-list-tile @click='logout()'>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click='pushSettings()'>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click='pushAbout()'>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if='this.user.isAdmin' @click='pushAdmin()'>
            <v-list-tile-title>Admin</v-list-tile-title>
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

import axios from 'axios'

export default {
  name: 'toolbar',
  data () {
    return {
      user: '',
      name: '',
      loggedIn: false
    }
  },
  methods: {
    pushCreate () {
      this.$router.push({
        name: 'Create'
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
    pushAdmin () {
      this.$router.push({
        name: 'Admin'
      })
    },
    logout () {
      this.$cookie.delete('user')
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
      this.name = 'login'
    }
  }
}
</script>