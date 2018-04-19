<template>
  <v-app id='login'>
    <v-card flat>
      <img id='button' @click='googleLogin()' src='../assets/btn_google_signin_dark_normal_web.png'/>
    </v-card>
  </v-app>
</template>

<style>
#button {
 width: 191px;
 height: 46px;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'Login',
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
          self.$bus.$emit('user', res.data.doc)
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
