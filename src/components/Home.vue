// eslint-disable-next-line
<template>
  <div id="home">
    <v-app id="cardslist">
        <h1 id='header'> What to fix? Submit a fix or vote on some here! </h1>
        <v-layout v-for="project in sortedByVote" v-bind:key='project._id'>
          <v-flex id='layout'>
              <v-card id='card' data-id=project.id>
                
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ project.title }}</h3>
                    <div class='title left'>{{ project.votes }} Votes</div>
                  </div>
                </v-card-title>

                <v-card-text>
                  {{ project.description }}
                </v-card-text>
                
                <v-card-actions>
                  <v-btn flat @click.native='voteUp(project)' id='votebutton'>Vote for this</v-btn>
                </v-card-actions>

              </v-card>
          </v-flex>
        </v-layout>
    </v-app>
  </div>
</template>

<style>
#votebutton {
  color: maroon;
}
#layout {
  display: flex;
  justify-content: center;
  min-width: 600px;
}
#card {
  min-width: 90%;
  max-width: 90%;
  margin: 15px 0px;
  min-height: 10%;
}
#background {
  height: 100%;
}
</style>


<script>

import axios from 'axios'

export default {
  data () {
    return {
      projects: []
    }
  },
  methods: {
    voteUp: function (proj) {
      //TODO: log votes and check if user has already voted for this
      //update remote
      axios.put('http://localhost:3000/project/votes/' + proj._id)
      .then(function (res) {
        //update locally
        proj.votes = proj.votes + 1
      })
      .catch(function (err) {
        handleError(err)
      })
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
    axios.get('http://localhost:3000/project/')
      .then(function (res) {
        self.projects = res.data
      })
  }
}
</script>
