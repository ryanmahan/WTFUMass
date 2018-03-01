<template>
  <v-app>
    <div id='adminActions'>
      <v-menu offset-y close-on-click>
        <v-btn flat id='button' slot='activator'>Tags</v-btn>
        <v-list>
          <v-list-tile :key='index' v-for='(tag, index) in tags' @click='setTag(project, tag.title)'>
            <v-list-tile-title >{{ tag.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu >
      <v-menu offset-y close-on-click>
        <v-btn flat id='button' slot='activator'>Actions</v-btn>
        <v-list>
          <v-list-tile :class='action.class' :key='index' v-for='(action, index) in actions' @click='doAction(project, action.title)'>
            <v-list-tile-title >{{ action.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
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
          <v-btn id='maroon' flat @click.stop="replyfunc()">Reply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style>
body {
  background-color: white;
}

#button {
  color: maroon;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'Admin',
  data () {
    return {
      tags: [
        {title: 'Potential Project'},
        {title: 'Currently Working on Project'},
        {title: 'Project Done!'},
        {title: 'No tag'}
      ],
      actions: [
        {title: 'Delete', class: 'red'},
        {title: 'Reply'}
      ],
      replyDialog: false,
      replyTo: {},
      reply: ''
    }
  },
  methods: {
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
    replyfunc: function () {
      this.replyDialog = false
      axios.put('/project/reply/' + this.replyTo._id, {
          value: this.reply
      })
      .then(function (res) {
        if (res.data.success) {
          proj.reply = this.reply
        }
      })
    },
    doAction: function(proj, action) {
      if(action === 'Delete'){
        axios.delete('/project/' + proj._id)
        location.reload()
      } else if(action == 'Reply'){
        this.replyTo = proj
        this.replyDialog = true
      }
    }
  },
}
</script>
