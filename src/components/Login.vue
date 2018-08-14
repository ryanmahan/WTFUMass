<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../../keys.js';

export default {
  name: 'auth',
  mounted() {
    var self = this
    var uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
      callbacks: {
        'signInSuccessWithAuthResult': function (currentUser, credential, redirectUrl) {
            let cu = currentUser.user
            axios.post('/user/verify', {
              email: cu.email,
              fname: cu.given,
            }).then((res) => {
              self.$cookie.set('user', JSON.stringify(res.data.doc), "0")
              self.$bus.$emit('user', res.data.doc)
              location.reload()
            })
            
            return false;
          }
      },
    } 
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>