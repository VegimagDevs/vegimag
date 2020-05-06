<template>
  <div class="container mx-auto px-4">
    <form @submit.prevent="signup">
      <input v-model="email" type="email" placeholder="Adresse mail">
      <input v-model="password" type="password" placeholder="Mot de passe">
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { auth } from '@/plugins/firebase'

@Component
export default class Signup extends Vue {
  email = ''
  password = ''

  signup () {
    auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(errorCode, errorMessage)
      })
  }
}
</script>
