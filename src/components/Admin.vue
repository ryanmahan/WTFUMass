<template>
  <main id="home">
    <v-app id="cardslist">
        <h1 id='header'> What to fix? Submit a fix or vote on some here! </h1>
        <v-layout v-for="project in sortedByVote" v-bind:key='project._id'>
          <v-flex id='layout'>
              <v-card class="my-2" id='card'>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0 text-xs-left">{{ project.title }}</h3>
                    <div class='title mb-0 text-xs-left'>{{ project.votes }} Votes</div>
                  </div>
                </v-card-title>
                <v-card-text class='subheading text-xs-left autoscroll'>
                  {{ project.description }}
                </v-card-text>
                <v-card-actions>
                  <v-btn outline @click.native='voteUp(project)' id='votebutton'>
                    <span v-if='!project.voted'>Vote For This</span>
                    <span v-if='project.voted'>Voted!</span>
                  </v-btn>
                  <v-menu offset-y>
                    <v-btn flat slot='activator'>Tags</v-btn>
                    <v-list>
                      <v-list-tile :class='tag.class' :key='index' v-for='(tag, index) in tags' @click='setTag(project, tag.title)'>
                        <v-list-tile-title >{{ tag.title }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                  <v-menu offset-y>
                    <v-btn flat slot='activator'>Actions</v-btn>
                    <v-list>
                      <v-list-tile :class='action.class' :key='index' v-for='(action, index) in actions' @click='doAction(project, action.title)'>
                        <v-list-tile-title >{{ action.title }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-card-actions>
              </v-card>
          </v-flex>
        </v-layout>
    </v-app>
  </main>
</template>

<style>
#votebutton {
  color: maroon;
}
#card {
  min-width: 90%;
  max-width: 90%;
  margin: 0px auto;
}
</style>


<script>

import axios from 'axios'

export default {
  name: 'Admin',
  data () {
    return {
      projects: [],
      tags: [
        //placeholder tags 
        {title: 'Under Consideration', class: 'yellow accent-4'},
        {title: 'In Action', class: 'red darken-3'},
        {title: 'Done!', class: 'green darken-2'},
        {title: 'No tag', class: 'white'}
      ],
      actions: [
        {title: 'Delete', class: 'red'}
      ]
    }
  },
  methods: {
    voteUp: function (proj) {
      let self = this
      let currentUser = this.logged()
      if(!currentUser) {
        alert('You must be logged in to vote')
        this.$router.push({
          name: 'Login'
        })
        return
      }
      axios.put('http://localhost:3000/project/votes/' + proj._id, {
        user: currentUser
      })
      .then(function (res) {
        if (res.data.success) {
          proj.votes = proj.votes + 1
          proj.voted = true
        } else {
          alert('You have already voted for this')
        }
      })
      .catch(function (err) {
        handleError(err)
      })
    },
    setTag: function (project, tag) {
      //TODO: Backend model and set route
      if (tag === 'No tag') {
        project.tag = 'None'
      }
      else {
        project.tag = tag
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
    if(!currentUser || !currentUser.isAdmin) {
      this.$router.push({
        name: 'Home'
      })
    }

    axios.get('http://localhost:3000/project/')
    .then(function (res) {
      self.projects = res.data
      self.projects.forEach(function (proj) {
        proj.voted = proj.votedBy.includes(currentUser._id)
        if (currentUser === null) {
          proj.voted = true
        }
      })
    })
  },
}
</script>
