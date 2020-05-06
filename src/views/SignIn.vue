<template>
  <div>
    <form @submit.prevent="signIn">
      <label for="email">Adresse email :</label>
      <input type="text" v-model="email" placeholder="Email"><br>

      <label for="password">Mot de passe :</label>
      <input type="password" v-model="password" placeholder="Mot de passe"><br>
      <button type="submit">Se connecter</button>
    </form>
    <p>Mot de passe oublié ?</p>
    <p>Pas de compte ?</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { auth } from '@/plugins/firebase'

@Component
export default class SignIn extends Vue {
  email = ''
  password = ''

  signIn () {
    auth.signInWithEmailAndPassword(this.email, this.password).then(
      function () {
        alert('Bienvenu sur Vegimag')
      },
      function (err) {
        alert('Quelque chose s’est mal passé :' + err.message)
      })
  }
}
</script>
