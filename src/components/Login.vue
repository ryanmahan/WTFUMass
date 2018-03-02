<template>
  <v-app id='app'>
    <meta name="google-site-verification" content="lCO-Y0_siXEtcD9_fIxqGufrGE9KjGi6wK1Siq6W4Rk" />
    <v-flex xs10 offset-xs1 id='layout'>
      <v-card id="card">
        <span id='header' class='headline mb-0 left'>Login</span>
        <v-form id="form" ref='loginForm'>
          <v-text-field
            label="Username"
            v-model="username"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            required
            type='password'
          ></v-text-field>
          <v-alert 
            type='error' 
            :value='error'
            transition='slide-x-transition'>
              Error logging in, your username or password may be incorrect.
          </v-alert>
          <v-card-actions>
              <v-btn @click.native='submit()' outline id='submitBtn'>Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
      <v-button @click='googleLogin()' primary>Google Log in (unofficial)</v-button>
      <p> Dont have an account? <router-link to='SignUp'> Sign up here </router-link></p>
    </v-flex>
  </v-app>
</template>

<style>
#card {
  min-width: 90%;
  max-width: 90%;
  margin: 10px auto;
}
#layout {
  background-color: var(--main-bg);
  justify-content: center;
  min-width: 90%;
  min-height: 0px;
}
</style>


<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: false,
    }
  },
  methods: {
    submit (evt) {
      let self = this
      axios.get('/user/login', {
        params: {
        username: self.username,
        password: self.password
        }
      })
      .then (function (res) {
        if (res.data.success) {
          self.$cookie.set('user', JSON.stringify(res.data.doc), "0")
          self.$bus.$emit('user', res.data.doc.fname)
          self.$router.push({
            name: 'Home'
          })
        } else {
          self.error = true
        }
      })
    },
    googleLogin () {
      this.$googleAuth().signIn(function (authorizationCode) { 

      // things to do when sign-in succeeds
      console.log(authorizationCode)
      // You can send the authorizationCode to your backend server for further processing, for example
      // this.$http.post('http://your/backend/server', { code: authorizationCode, redirect_uri: 'postmessage' }).then(function (response) {
      //   if (response.body) {
      //     // ...
      //   }
      // }, function (error) {
      //   console.log(error)
      // })
      
    }, function (error) {
      // things to do when sign-in fails
    })
    }
  }
}
</script>
