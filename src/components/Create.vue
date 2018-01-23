<template>
  <div class='create'>
    <v-app>
      <v-flex xs10 offset-xs1>
        <v-card id="card">
          <v-form id="form" v-model='valid' ref='createForm'>
            <v-text-field
              label="First Name"
              v-model="name"
              :counter="20"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="email"
              :rules="emailRules"
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
              :counter="500"
              required
            ></v-text-field>
          </v-form>
        </v-card>
      </v-flex>
    </v-app>
  </div>
</template>

<style>
#form {
  margin: 0px 35px;
}
#card {
  margin: 25px 0px 0px;
}
</style>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      title: '',
      description: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  }
}