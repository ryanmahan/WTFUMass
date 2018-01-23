<template>
  <div id="app">
    <v-toolbar id="bar" dark=true>
      <v-toolbar-title id="title"> 
        WTF UMass
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click='pushCreate' flat>Submit a fix</v-btn>
        <v-btn @click='pushHome' flat>Vote on fixes</v-btn>
        <v-btn @click='pushAbout' flat>About</v-btn>
        <!-- TODO Login button and page -->
      </v-toolbar-items>
    </v-toolbar>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#bar {
  background-color: maroon;
}
#title {
  color: white
}
</style>
