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
      <v-btn @click='pushLogin' flat>{{user}}</v-btn>
      <!-- TODO Login button and page -->
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
      user: ''
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
    let name = this.$cookie.get('name')
    if (name !== null){
      this.user = name
    } else {
      this.user = 'login'
    }
  }
}
</script>