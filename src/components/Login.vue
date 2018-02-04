<template>
  <v-app id='app'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <v-flex xs10 offset-xs1 id='flex'>
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
              <v-btn @click.native='submit()' outline id='submitBtn'>Submit</v-btn>
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

<script>

import axios from 'axios'

export default {
  name: 'Login',
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
          console.log(JSON.parse(self.$cookie.get('user')))
          // self.$router.push({
          //   name: 'Home'
          // })
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
          self.$cookie.set('name', self.fname)
          self.$router.push({
            name: 'Home'
          })
        }
      })
    }
  }
}
</script>
