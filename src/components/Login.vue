<template>
  <v-app id='app'>
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
          <v-card-actions>
              <v-btn @click.native='submit()' outline id='submitBtn'>Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
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

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
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
          location.reload()
          self.$router.push({
            name: 'Home'
          })
        }
      })
    }
  }
}
</script>
