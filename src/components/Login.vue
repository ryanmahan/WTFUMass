<template>
  <v-app id='app'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <facebook-login class="button"
      appId="163971481055567"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
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
          ></v-text-field>
          <v-card-actions>
              <v-btn @click.native='submit()' outline id='submitBtn'>Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
      <v-card>
        <span id='header' class='headline mb-0 left'>Create</span>
        <v-form id='form' ref='newUserForm'>
          <v-text-field
            label="Username"
            v-model="cusername"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="cpassword"
            required
          ></v-text-field>
          <v-text-field
            label="First Name"
            v-model="fname"
            required
          ></v-text-field>
          <v-text-field
            label="Last Name"
            v-model="lname"
            required
          ></v-text-field>
          <v-checkbox
            label="Admin User?"
            v-model="admin"
            required
          ></v-checkbox>
          <v-card-actions>
            <v-btn @click.native='create()' outline id='submitBtn'>Create</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
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
import facebookLogin from 'facebook-login-vuejs'

export default {
  name: 'Login',
  components: {
    facebookLogin
  },
  data () {
    return {
      username: '',
      password: '',
      cusername: '',
      cpassword: '',
      fname: '',
      lname: '',
      admin: false
    }
  },
  methods: {
    submit (evt) {
      let self = this
      axios.get('http://localhost:3000/user/login', {
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
    },
    create (evt) {
      let self = this
      axios.post('http://localhost:3000/user/create', {
          username: self.cusername,
          password: self.cpassword,
          fname: self.fname,
          lname: self.lname,
          isAdmin: self.admin
      })
      .then (function (res) {
        if (res.data.success) {
          location.reload()
          self.$cookie.set('user', JSON.stringify(res.data.doc))
          self.$router.push({
            name: 'Home'
          })
        }
      })
    }
  }
}
</script>
