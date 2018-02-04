<template>
  <v-toolbar id="bar" dark>
    <v-toolbar-title id="title"> 
      WTF UMass
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn @click='pushCreate' flat>Submit a fix</v-btn>
      <v-btn @click='pushHome' flat>Vote on fixes</v-btn>
      <v-btn @click='pushAbout' flat>About</v-btn>
      <v-btn v-if='!loggedIn' @click='pushLogin' flat>{{user}}</v-btn>
      <v-menu v-if='loggedIn'>
        <v-btn flat slot='activator'>{{user}}</v-btn>
          <v-list>
            <v-list-tile v-for='item in items' :key='item.title'>
              <v-list-tile-title>{{ user }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
#bar {
  background-color: maroon;
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
      loggedIn: false,
      items: [
      { title: 'Click Me 1' },
      { title: 'Click Me 3' },
      { title: 'Click Me 4' },
      { title: 'Click Me 2' }
    ]
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
    }
  },
  created: function () {
    let user = JSON.parse(this.$cookie.get('user'))
    if (user !== null){
      this.loggedIn = true
      this.user = user.fname
      console.log(this.user)
    } else {
      this.user = 'login'
    }
  }
}
</script>