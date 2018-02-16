<template>
  <main id="home">
    <v-app id="cardslist">
      <tutorial :show='firstLogin'></tutorial>
        <v-layout v-for="project in sortedByVote" v-bind:key='project._id'>
          <v-flex id='layout'>
              <v-card class="my-2" id='card'>
                <v-progress-linear class='my-0' v-bind:value='project.bar' height="4" color='red darken-4'></v-progress-linear>
                  <v-chip v-if='project.tag != null' label id='maroon' text-color="white">{{ project.tag }}</v-chip>
                <br/>
                <v-card-title class='title' primary-title>
                  <div id='tag'>
                    <h3 class="headline mb-0 tepentatholonxt-xs-left">{{ project.title }}</h3>
                    <div class='title mb-0 text-xs-left'>{{ project.votes }} Votes</div>
                  </div>
                </v-card-title>
                <v-card-text class='subheading text-xs-left autoscroll'>
                  {{ project.description }}
                </v-card-text>
                <v-card-actions>
                  <v-btn v-if='!project.voted' outline @click.native='voteUp(project)' id='maroon'>
                    <span v-if='!project.voted'>Vote For This</span>
                  </v-btn>
                  <v-btn v-if='project.voted' @click.native='voteUp(project)' id='maroon'>
                    <span class='white--text' v-if='project.voted'>Voted!</span>
                  </v-btn>
                  <div id='adminActions' v-if='isAdmin'>
                    <v-menu offset-y close-on-click>
                      <v-btn flat slot='activator'>Tags</v-btn>
                      <v-list>
                        <v-list-tile :key='index' v-for='(tag, index) in tags' @click='setTag(project, tag.title)'>
                          <v-list-tile-title >{{ tag.title }}</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu >
                    <v-menu offset-y close-on-click>
                      <v-btn flat slot='activator'>Actions</v-btn>
                      <v-list>
                        <v-list-tile :class='action.class' :key='index' v-for='(action, index) in actions' @click='doAction(project, action.title)'>
                          <v-list-tile-title >{{ action.title }}</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                  </div>
                </v-card-actions>
              </v-card>
          </v-flex>
        </v-layout>
      <v-snackbar top  v-model="snackbar">{{ message }}
        <v-btn v-if='message.includes("log")' class='mx-1' flat color='blue lighten-2' @click='pushLogin()'> Login </v-btn>
        <v-btn class='mx-1' flat color='blue lighten-2' @click='snackbar = false'>Close</v-btn>
      </v-snackbar>
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
#maroon {
  color: maroon;
  background-color: maroon;
}
</style>


<script>

import axios from 'axios'
import Tutorial from './Tutorial'

export default {
  name: 'Admin',
  components: {
    Tutorial
  },
  data () {
    return {
      projects: [],
      tags: [
        {title: 'Potential Project'},
        {title: 'Currently Working on Project'},
        {title: 'Project Done!'},
        {title: 'No tag'}
      ],
      actions: [
        {title: 'Delete', class: 'red'}
      ],
      isAdmin: false,
      message: '',
      snackbar: false,
      firstLogin: false
    }
  },
  methods: {
    voteUp: function (proj) {
      let self = this
      let currentUser = this.logged()
      if(!currentUser) {
        console.log("Clicked!")
        this.message = 'You must be logged in to vote'
        this.snackbar = true
        
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
    setTag: function (project, tag) {
      if (tag === 'No tag'){
        tag = null
      }
      axios.put('/project/tag/' + project._id, {
        tag: tag
      })
      .then(function (res) {
        project.tag = tag
        if (project.tag === 'Project Done!') {
          project.bar = "100"
        } else if (project.tag === 'Currently Working on Project') {
          project.bar = "65"
        } else if (project.tag === 'Potential Project') {
          project.bar = "35"
        }
      })
    },
    pushLogin: function() {
      this.$router.push({
        name: 'Login'
      })
    },
    doAction: function(proj, action) {
      if(action === 'Delete'){
        axios.delete('/project/' + proj._id)
        location.reload()
      }
    }
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
    this.isAdmin = currentUser.isAdmin

    axios.get('/project/')
    .then(function (res) {
      self.projects = res.data
      self.projects.forEach(function (proj) {
        proj.voted = proj.votedBy.includes(currentUser._id)
        if (currentUser === null) {
          proj.voted = true
        }
        if (proj.tag === 'Project Done!') {
          proj.bar = 100
        }
        if (proj.tag === 'Currently Working on Project') {
          proj.bar = 65
        }
        if (proj.tag === 'Potential Project') {
          proj.bar = 35
        }
      })
    })
    if (this.$route.params !== undefined) {
      if (this.$route.params.new) {
      this.firstLogin = true
      }
    }
  },
}
</script>
