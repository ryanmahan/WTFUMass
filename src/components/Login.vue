<template lang="html">
  <img @click="googleLogin" src="../assets/btn_google_dark_normal_ios.svg"></img>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase/app';
import 'firebase/auth'
import firebaseui from 'firebaseui'
import {config} from '../../keys.js';

export default {
  name: 'auth',
  methods: {
    googleLogin() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider);
    }
  },
  mounted() {
    var self = this
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    // var uiConfig = {

    //   signInOptions: [
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     ],
    //   callbacks: {
    //     'signInSuccessWithAuthResult': function (currentUser, credential, redirectUrl) {
    //         let cu = currentUser.user
    //         axios.post('/user/verify', {
    //           email: cu.email,
    //           fname: cu.given,
    //         }).then((res) => {
    //           self.$cookie.set('user', JSON.stringify(res.data.doc), "0")
    //           self.$bus.$emit('user', res.data.doc)
    //           location.reload()
    //         })
            
    //         return false;
    //       }
    //   },
    // } 
    
    // let ui = firebaseui.auth.AuthUI.getInstance()
    // if (!ui) {
    //   ui = new firebaseui.auth.AuthUI(firebase.auth());
    // }
    // ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>