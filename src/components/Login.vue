<template>
  <v-app id='app'>
    <meta name="google-site-verification" content="lCO-Y0_siXEtcD9_fIxqGufrGE9KjGi6wK1Siq6W4Rk" />
    <v-flex xs10 offset-xs1 id='layout'>
      <!-- <v-card id="card">
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
      -->
      <button @click='googleLogin()' type="button" class="google-button">
        <span class="google-button__icon">
          <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
        </span>
        <span class="google-button__text">Sign in with Google </span>
      </button>
      <p> Dont have an account? <router-link to='SignUp'> Sign up here </router-link></p>
    </v-flex>
  </v-app>
</template>

<style>
.google-button {
  height: 40px;
  width: 170px;
  border-width: 0;
  background: white;
  color: #737373;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;
}
    
.google-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 4px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}
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

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  axios.post('/user/verify', googleUser.getAuthResponse().id_token)
}

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
      let self = this
      this.$googleAuth().directAccess()

      this.$googleAuth().signIn(function (googleUser) { 
        // things to do when sign-in succeeds
        console.log('success')

        var id = googleUser.getAuthResponse().id_token
        console.log('sending request')
        axios.post('/user/verify', {
          token: id
        })


        .then(function (res) {
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
      }, function (error) {
        console.log(error)
        // things to do when sign-in fails
      })
    }
  }
}
</script>
