<template>
  <div class='create'>
    <v-app id='app'>
      <v-flex xs10 offset-xs1 id='flex'>
        <v-card id="card">
          <span id='header' class='headline mb-0 left'>What to fix?</span>
          <v-form id="form" ref='createForm'>
            <v-text-field
              label="First Name"
              v-model="name"
              :counter="20"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="email"
              required
            ></v-text-field>
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
    </v-app>
  </div>
</template>

<style>
:root {
  --main-bg: lightgray;
}
.application--wrap {
  background-color: var(--main-bg)
}
body {
  background-color: var(--main-bg)
}
#flex {
  background-color: var(--main-bg)
}
#form {
  margin: 0px 35px;
}
#card {
  margin: 25px auto;
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
      name: '',
      email: '',
      title: '',
      description: ''
    }
  },
  methods: {
    submit (evt) {
      console.log('submit ran')
      axios.post('http://localhost:3000/project', {
        name: this.name,
        email: this.email,
        title: this.title,
        description: this.description
      })
      .then(function (res) {
        if(res.data === 'failure') {
          //TODO Feedback for failure path
          console.log('failed')
        } else {
          this.$router.push({
            name: 'Home'
          })
        }
      })
    }
  }
}
</script>