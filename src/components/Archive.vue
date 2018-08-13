<template>
  <main id="home">
    <v-app id="cardslist">
      <tutorial :show='firstLogin'></tutorial>
      <v-bottom-sheet v-model='showLogin'>
        <v-card>
          <br>
          <span class='title'>You must log in to vote</span>
          <login/>
          <br>
        </v-card>
      </v-bottom-sheet>
        <v-layout v-for="project in sortedByVote" v-bind:key='project._id'>
          <v-flex id='layout'>
              <v-card class="my-2" id='card'>
                <v-progress-linear class='my-0' v-bind:value='project.bar' height="4" primary></v-progress-linear>
                  <v-chip v-if='project.tag != null' label color='primary' text-color="white">{{ project.tag }}</v-chip>
                <br/>
                <v-card-title class='title text-xs-left' primary-title>
                  <div id='tag'>
                    <h3 class="headline mb-0 tepentatholonxt-xs-left">{{ project.title }}</h3>
                    <div class='title my-1 text-xs-left'>{{ project.votes }} Votes</div>
                  </div>
                </v-card-title>
                <v-card-text class='subheading text-xs-left autoscroll'>
                  {{ project.description }}
                  <div v-if='project.reply != None' id='reply'>
                    <hr>
                    <h3> SGA Reply </h3>
                    <p> {{project.reply}} </p>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-chip v-if='project.voted' label color='primary' text-color="white">You voted for this</v-chip>
                  <div id='adminActions' v-if='isAdmin'>
                    <AdminTools :project='project'></AdminTools>
                  </div>
                </v-card-actions>
                <i>
                  <span v-if='isAdmin' class='caption left my-0'>Submitted {{project.dateCreated}} by {{project.email}}</span>
                  <span v-if='!isAdmin' class='caption left my-0'>Submitted {{project.dateCreated}}</span>
                </i>
              </v-card>
          </v-flex>
        </v-layout>
        <span class='headline text-xs-center' > Dont see an idea you have? </span>
        <span class='headline'> <router-link to='Create'> Submit a fix here! </router-link> </span>
      <v-snackbar top  v-model="snackbar">{{ message }}
        <v-btn v-if='message.includes("log")' class='mx-1' flat color='blue lighten-2' @click='pushLogin()'> Login </v-btn>
        <v-btn class='mx-1' flat color='blue lighten-2' @click='snackbar = false'>Close</v-btn>
      </v-snackbar>
      <v-dialog v-model="replyDialog" max-width="500px">
          <v-card>
            <v-card-title>
              Reply
            </v-card-title>
            <v-card-text>
              <v-text-field
                :items="select"
                label="Reply to project"
                item-value="text"
                v-model='reply'
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color='primary' flat @click.stop="replyfunc()">Reply</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-app>
  </main>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
#adminActions {
  background-color: white;
}
#reply {
  margin-top: 15px;
}
</style>


<script>
import axios from 'axios'
import Tutorial from './Tutorial'
import AdminTools from './AdminTools'
import Login from './Login'

export default {
  name: 'Home',
  components: {
    Tutorial,
    AdminTools,
    Login
  },
  data () {
    return {
      projects: [],
      isAdmin: false,
      message: '',
      snackbar: false,
      showLogin: false,
      firstLogin: false,
    }
  },
  methods: {
    voteUp: function (proj) {
      let self = this
      let currentUser = this.logged()
      if(!currentUser) {
        this.showLogin = true
        return
      }
      axios.put('/project/votes/' + proj._id, {
        user: currentUser
      })
      .then(function (res) {
        if (res.data.success) {
          proj.votes = proj.votes + 1
          proj.voted = true
        } else {
          self.message = 'You have already voted for this'
          self.snackbar = true
        }
      })
    },
    pushLogin: function() {
      this.$router.push({
        name: 'Login'
      })
    },
  },
  computed: {
    sortedByVote: function() {
      function compare(a, b) {
        if (a.votes > b.votes) {
          return -1;
        }
        if (a.votes < b.votes) {
          return 1;
        }
        return 0;
      }
      return this.projects.sort(compare)
    }
  },
  created: function() {
    let self = this
    let currentUser = this.logged()
    axios.get('/user/admin/' + currentUser._id)
    .then(function (res) {
      console.log(res.data.admin)
      self.isAdmin = res.data.admin
    })
    axios.get('/project/')
    .then(function (res) {
      self.projects = res.data
      self.projects.forEach(function (proj) {
        proj.voted = proj.votedBy.includes(currentUser._id)
        //filter out if archived is true
        self.projects = self.projects.filter(function (item) {
          return item.archived
        })
      })
    })
    if(this.$cookie.get('iwashere') === null) {
      this.$cookie.set('iwashere', new Date().toString, 60 * 60 * 24 * 30 * 12)
      this.firstLogin = true
    }
  },
  mounted: function () {
    this.$bus.$on('user', function (arg) {
      this.showLogin = false
      location.reload()
    }.bind(this))
  }
}
</script>