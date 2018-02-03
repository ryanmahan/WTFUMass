// eslint-disable-next-line
<template>
  <div id="home">
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
                  <v-btn outline @click.native='voteUp(project)' id='votebutton'>{{votetext}}</v-btn>
                  <v-btn outline @click.native='setTag(project)' id='tagbutton'>{{tagtext}}</v-btn>
                </v-card-actions>
              </v-card>
          </v-flex>
        </v-layout>
    </v-app>
  </div>
</template>

<style>
:root {
  --main-bg: lightgray;
}
#votebutton {
  color: maroon;
}
h1 {
  background-color: var(--main-bg);
}
body {
  background-color: var(--main-bg);
}
.application--wrap {
  min-height: 1px
}
#layout {
  background-color: var(--main-bg);
  justify-content: center;
  min-width: 90%;
  min-height: 0px;
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
  data () {
    return {
      projects: [],
      currentUser: {},
      votetext: 'Vote for this',
      tagtext: 'Add tag'
    }
  },
  methods: {
    voteUp: function (proj) {
      let self = this
      axios.get('http://localhost:3000/user/current')
      .then(function (res) {
        self.currentUser = res.data
      })
      axios.put('http://localhost:3000/project/votes/' + proj._id, {
        user: self.currentUser
      }) 
      .then(function (res) {
        console.log(res)
        //update locally
        if (res.data.success) {
          proj.votes = proj.votes + 1
          self.votetext = 'Voted!'
        } 
        
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
