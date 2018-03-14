<template>
  <v-app id='login'>
    <meta name="google-site-verification" content="lCO-Y0_siXEtcD9_fIxqGufrGE9KjGi6wK1Siq6W4Rk" />
    <div id='beforeSheet' class="text-xs-center">
      <v-dialog max-width="50%" v-model='sheet'>
        <v-card>
          <span class='title'> Log in to {{action}} </span>
          <hr>
          <img @click='googleLogin()' src='../assets/btn_google_signin_dark_normal_web.png'/>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  props: ['action'],
  data () {
    return {
      sheet: true,
    }
  },
  methods: {
    // DEPRECATED. GOOGLE SIGN-ON ONLY NOW
    // submit (evt) {
    //   let self = this
    //   axios.get('/user/login', {
    //     params: {
    //     username: self.username,
    //     password: self.password
    //     }
    //   })
    //   .then (function (res) {
    //     if (res.data.success) {
    //       self.$cookie.set('user', JSON.stringify(res.data.doc), "0")
    //       self.$bus.$emit('user', res.data.doc.fname)
    //       self.$router.push({
    //         name: 'Home'
    //       })
    //     } else {
    //       self.error = true
    //     }
    //   })
    // },
    googleLogin () {
      let self = this
      this.$googleAuth().directAccess()

      this.$googleAuth().signIn(function (googleUser) { 
        // things to do when sign-in succeeds
        console.log('success')

        var id = googleUser.getAuthResponse().id_token
        console.log('sending request')
        axios.post('/user/verify', {
          token: id
        })


        .then(function (res) {
          if (res.data.success) {
          self.$cookie.set('user', JSON.stringify(res.data.doc), "0")
          self.$bus.$emit('user', res.data.doc.fname)
          
          self.$router.push({
            name: 'Home'
          })
        } else {
          self.error = true
        }
        })
      }, function (error) {
        console.log(error)
        // things to do when sign-in fails
      })
    }
  }
}
</script>
