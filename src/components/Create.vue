<template>
  <div class='create'>
    <v-app id='app'>
      <v-flex xs10 offset-xs1 id='flex'>
        <v-card id="card">
          <span id='header' class='headline mb-0 left'>What to fix?</span>
          <v-form id="form" ref='createForm'>
            <v-text-field
              label="Project Title"
              v-model="title"
              :counter="80"
              required
            ></v-text-field>
            <v-text-field
              label="Description"
              v-model="description"
              :counter="1000"
              multi-line
              required
            ></v-text-field>
            <v-card-actions>
               <v-btn @click.native='submit()' outline id='submitBtn'>Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
      <v-snackbar top  v-model="snackbar">{{ message }}
        <v-btn v-if='message.includes("log")' class='mx-1' flat color='blue lighten-2' @click='pushLogin()'> Login </v-btn>
        <v-btn class='mx-1' flat color='blue lighten-2' @click='snackbar = false'>Close</v-btn>
      </v-snackbar>
    </v-app>
  </div>
</template>

<style>
#form {
  margin: 0px 35px;
}
#card {
  margin: 0px auto;
}
#header {
  margin: 10px 25px 0px;
}
#submitBtn {
  color: maroon;
}
</style>
<script>
import axios from 'axios'

export default {
  name: 'Create',
  data () {
    return {
      title: '',
      description: '',
      message: '',
      snackbar: false
    }
  },
  methods: {
    submit (evt) {
      console.log('submit ran')
      let currUser = this.logged()
      if (!currUser) {
        this.message = 'You must be logged in to submit a project'
        this.snackbar = true
        return
      }
      axios.post('/project', {
        title: this.title,
        description: this.description,
        user: currUser
      })
      .then(function (res) {
          this.$router.push({
            name: 'Home'
          })
      })
    },
    pushLogin: function () {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>