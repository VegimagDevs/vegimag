<template>
  <div class="container mx-auto px-4">
    <form @submit.prevent="signIn" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="mb-4 text-2xl">Connexion</h1>

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
        <button class="btn btn-primary" type="submit">Se connecter</button>
      </div>
    </form>

    <p>Mot de passe oublié ?</p>
    <p>Pas de compte ?</p>
  </div>
</template>

<script lang="ts">
import { auth } from '@/plugins/firebase'

export default {
  name: 'SignIn',

  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    async signIn () {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password)

        await this.$store.dispatch('alert/create', {
          type: 'success',
          title: 'C\'est bon !',
          message: 'Bon retour parmi nous !'
        })

        const redirectPath = this.$route.query.redirect

        if (redirectPath) {
          this.$router.push(redirectPath)
        } else {
          this.$router.push({
            name: 'Home'
          })
        }
      } catch (error) {
        this.$store.dispatch('alert/create', {
          type: 'error',
          title: 'Une erreur est survenue !',
          message: error.message
        })
      }
    }
  }
}
</script>
