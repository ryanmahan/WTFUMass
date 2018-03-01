<template>
  <div id="app">
    <v-app id="inspire">
      <v-dialog v-model='visible'>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="e1 > 1">Vote on Fixes</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="e1 > 2">Submit a Fix</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Get Involved!</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-5">
                <p>
                  Vote for a fix using the 'Vote for this' button! The tag and progress bar at the top will show the SGA's progress on a project.
                </p>
                <v-card class="my-2" id='card'>
                  <v-progress-linear class='my-0' v-bind:value='35' height="4" color='red darken-4'></v-progress-linear>
                    <v-chip label color='primary' text-color="white">Currently working on Project</v-chip>
                  <br/>
                  <v-card-title class='title' primary-title>
                    <div id='tag'>
                      <h3 class="headline mb-0 tepentatholonxt-xs-left">WTFUMass</h3>
                      <div class='title mb-0 text-xs-left'>39 Votes</div>
                    </div>
                  </v-card-title>
                  <v-card-text class='subheading text-xs-left autoscroll'>
                    A website for UMass Students to submit projects for the Student Government Association to work on
                  </v-card-text>
                  <v-card-actions>
                    <v-btn outline color='primary'>
                    <span>Vote For This</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-card>
              <v-btn outline color='primary' @click="e1 = 2">Continue</v-btn>
              <v-btn outline @click='visible=false'>Close</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card>
                <v-card-text> Submit anything for a fix so it can get voted on by other students! All you need is a title and a description.
                  <br> Got an idea right now? Go submit it at <router-link to='Create'> our create page! </router-link>
                </v-card-text>
              <v-form id="form" ref='createForm'>
                <v-text-field
                  label="Project Title"
                  placeholder="WTFUMass"
                  disabled
                  :counter="30"
                  required
                ></v-text-field>
                <v-text-field
                  label="Description"
                  placeholder="A website for UMass Students to submit projects for the Student Government Association to work on"
                  disabled
                  :counter="500"
                  auto-grow
                  multi-line
                  required
                ></v-text-field>
              <v-card-actions>
                <v-btn outline color='primary'>Submit</v-btn>
              </v-card-actions>
            </v-form>
            </v-card>
              <v-btn outline color='primary' @click="e1 = 3">Continue</v-btn>
              <v-btn outline @click='visible=false'>Close</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
                <v-card>
                <span class='title'> Thanks for using WTFUMass! </span>
                <br>
                <span class='body-2'> Do you want to get more involved with the fixes on this site? Join the Student Government Association! Email
                  sgaoutreach@umass.edu, or check out our <a href='https://umass.edu/sga'> website</a> to learn more! </span>
                <br>
                <span class='caption'> Created by Ryan Mahan <br> <a href='https://github.com/ryanmahan/wtfumass'> View me on GitHub </a> </span>
              </v-card>
              <v-btn outline color='primary' @click="visible = false" >Continue</v-btn>
              <v-btn outline @click='visible=false'>Close</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
export default {
  props: [
    'show'
  ],
  data () {
    return {
      e1: 0,
      visible: false
    }
  },
  created: function () {
    this.visible = this.$props.show
  }
}
</script>