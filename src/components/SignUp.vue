<template>
  <v-app>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <div id='SignUp'>
      <v-flex xs10 offset-xs1 id='layout'>
        <v-card id='card'>
            <span id='header' class='headline left'>Sign Up</span>
            <v-form id='form' ref='newUserForm'>
              <v-text-field
                label="Username"
                v-model="username"
                required
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="email"
                hint='We only send emails when theres an update on your project'
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                hint='THIS SITE STILL IN TESTING, DO NOT USE A REAL PASSWORD'
                :type='vis1 ? "text" : "password"'
                :append-icon="vis1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (vis1 = !vis1)"
                required
              ></v-text-field>
              <v-text-field
                label="Confirm Password"
                v-model="cpassword"
                :type='vis2 ? "text" : "password"'
                :append-icon="vis2 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (vis2 = !vis2)"
                required
              ></v-text-field>
              <v-text-field
                label="First Name"
                v-model="fname"
                required
              ></v-text-field>
              <v-card-actions>
                <v-btn @click.native='create()' outline id='submitBtn'>Sign Up</v-btn>
              </v-card-actions>
            </v-form>
        </v-card>
      </v-flex>
      <p> Already have an account? <router-link to='Login'> Log in here </router-link></p>
    </div>
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
#header {
  margin-top: 1%;
  margin-left: 3%;
}
#form {
  margin: 2% 3% 3%;
}
#submitBtn {
  color: maroon;
}
</style>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      cpassword: '',
      fname: '',
      vis1: false,
      vis2: false
    }
  },
  methods: {
    create (evt) {

      if (this.password !== this.cpassword) {
        alert('Passwords do not match')
      }

      let self = this
      axios.post('/user/create', {
          username: self.username,
          password: self.password,
          email: self.email,
          fname: self.fname
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