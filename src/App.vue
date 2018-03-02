<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <toolbar></toolbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Toolbar from './components/Toolbar'

export default {
  name: 'app',
  components: {
    Toolbar
  }
}

</script>

<style>
html {
  background-color: lightgray;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightgray;
}
:root {
  --main-bg: lightgray;
}
h1 {
  background-color: var(--main-bg);
}
body {
  background-color: var(--main-bg);
}
.application--wrap {
  min-height: 1px;
  background-color: var(--main-bg);
}
#layout {
  background-color: var(--main-bg);
  justify-content: center;
  min-width: 90%;
  min-height: 0px;
}
</style>
