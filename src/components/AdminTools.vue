<template>
  <v-app>
    <div id='adminActions'>
      <v-menu offset-y close-on-click>
        <v-btn flat color='primary' slot='activator'>Tags</v-btn>
        <v-list>
          <v-list-tile :key='index' v-for='(tag, index) in tags' @click='setTag(tag.title)'>
            <v-list-tile-title >{{ tag.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu >
      <v-menu offset-y close-on-click>
        <v-btn flat color='primary' slot='activator'>Actions</v-btn>
        <v-list>
          <v-list-tile :class='action.class' :key='index' v-for='(action, index) in actions' @click='doAction(action.title)'>
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
</style>

<script>
import axios from 'axios'

export default {
  name: 'Admin',
  props: [
    'project'
  ],
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
        {title: 'Reply'},
      ],
      replyDialog: false,
      replyTo: {},
      reply: '',
    }
  },
  methods: {
    setTag: function (tag) {
      let self = this
      if (tag === 'No tag'){
        tag = null
      }
      axios.put('/project/tag/' + this.$props.project._id, {
        tag: tag
      })
      .then(function (res) {
        self.$props.project.tag = tag
        if (self.$props.project.tag === 'Project Done!') {
          self.$props.project.bar = "100"
        } else if (self.$props.project.tag === 'Currently Working on Project') {
          self.$props.project.bar = "65"
        } else if (self.$props.project.tag === 'Potential Project') {
          self.$props.project.bar = "35"
        }
      })
    },
    replyfunc: function () {
      let self = this
      self.replyDialog = false
      axios.put('/project/reply/' + self.replyTo._id, {
          value: self.reply
      })
      .then(function (res) {
        if (res.data.success) {
          self.$props.proj.reply = self.reply
        }
      })
    },
    doAction: function(action) {
      if(action === 'Delete'){
        axios.delete('/project/' + this.$props.project._id)
        location.reload()
      } else if(action == 'Reply'){
        this.replyTo = this.$props.project
        this.replyDialog = true
      } 
    }
  },
}
</script>
