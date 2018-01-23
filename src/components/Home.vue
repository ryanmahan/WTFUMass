<template>
  <div id="home">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <v-app id="card test">
      <h1> What to fix? Submit a fix or vote on some here! </h1>
      <v-layout>
        <v-flex xs10 offset-xs1>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">This is a Title</h3>
                <div class='title left'>1234 Votes</div>
              </div>
            </v-card-title>
            <v-card-text>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-card-actions>
              <v-btn flat id='votebutton'>Vote for this</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<style>
#votebutton {
  color: maroon;
}
</style>


<script>

import axios from 'axios'

export default {
  data () {
    return {
      show: false,
      projects: [],

    }
  },
  beforeMount() {
    axios.get('https://localhost:3000/project/')
    .then( function (res) {
      console.log(res)
    })
  }
}
</script>
