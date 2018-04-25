<template>
  <div class='create'>
    <v-app id='app'>
      <v-flex xs12 align-center id='flex'>
        <v-card id="card">
          <span id='header' class='headline mb-0 left'>What to fix?</span>
          <v-form id="form" ref='createForm'>
            <v-text-field
              label="Project Title"
              v-model="title"
              :counter="30"
              required
            ></v-text-field>
            <v-text-field
              label="Description"
              v-model="description"
              :counter="500"
              auto-grow
              multi-line
              required
            ></v-text-field>
            <v-card-actions>
               <v-btn @click.native='submit()' outline color='primary'>Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
      <v-bottom-sheet v-model='showLogin'>
        <v-card>
          <br>
          <span class='title'>You must log in to submit a project</span>
          <login/>
          <br>
        </v-card>
      </v-bottom-sheet>
    </v-app>
  </div>
</template>

<style>
#form {
  margin: 0px 35px;
}
#card {
  margin: 0px auto;
  max-width: 90%;
}
#header {
  margin: 10px 25px 0px;
}
</style>
<script>
import axios from 'axios'
import Filter from 'bad-words'
import Login from './Login'

var filter = new Filter();
filter.removeWords('umass')

export default {
  name: 'Create',
  components: {
    Login,
  },
  data () {
    return {
      title: '',
      description: '',
      message: '',
      snackbar: false,
      showLogin: false,
    }
  },
  created: function () {
    let currUser = this.logged()
    if (!currUser) {
      this.showLogin = true
    }
    this.$bus.$on('user', function (arg) {
      this.showLogin = false
    }.bind(this))
  },
  methods: {
    submit (evt) {
      let self = this
      let currUser = this.logged()
      if (!currUser) {
        this.showLogin = true
        return
      }
      if (!this.checkSubmission(this.title, 30)) {return}
      else if (!this.checkSubmission(this.description, 500)) {return}
      else {
        axios.post('/project/', {
          title: this.title,
          description: this.description,
          user: currUser
        })
        .then(function (res) {
          self.$router.push({
            name: 'Home'
          })
        })
      }
    },
    checkSubmission: function (check, length) {
      
      if(check.length > length){
        this.message = 'Submission length too long'
        this.snackbar = true
        return false
      }
      else if(filter.isProfane(check)) {
        check = filter.clean(check)
        this.message = 'Submission contains profanity'
        this.snackbar = true
        return false
      }
      return true
    },
    pushLogin: function () {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>