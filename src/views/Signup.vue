<template>
  <div class="container mx-auto px-4">
    <form @submit.prevent="signup" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="mb-4 text-2xl">Inscription</h1>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Adresse mail
        </label>
        <input v-model="email" type="email" placeholder="Adresse mail" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input v-model="password" type="password" placeholder="Mot de passe" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">S'inscrire</button>
      </div>
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
