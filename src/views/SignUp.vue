<template>
  <div class="container mx-auto px-4">
    <form @submit.prevent="signUp" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="mb-4 text-2xl">Inscription</h1>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Adresse mail
        </label>
        <input v-model="email" type="email" placeholder="Adresse mail" class="form-input">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input v-model="password" type="password" placeholder="Mot de passe" class="form-input">
      </div>

      <div class="flex items-center justify-between">
        <button class="btn btn-primary" type="submit">S'inscrire</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { auth } from '@/plugins/firebase'

@Component
export default class SignUp extends Vue {
  email = ''
  password = ''

  signUp () {
    auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect)
        } else {
          this.$router.push({
            name: 'Home'
          })
        }
      })
      .catch(error => {
        alert(error.message)
      })
  }
}
</script>
