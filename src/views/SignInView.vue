<template>
  <section>
    <form @submit.prevent="signIn" class="auth-form">
      <h1 class="mb-4 text-2xl">Connexion</h1>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Adresse mail
        </label>
        <input v-model="email" type="email" placeholder="Adresse mail" class="form-input">
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input v-model="password" type="password" placeholder="Mot de passe" class="form-input">
      </div>

      <div class="flex flex-wrap items-center mb-4">
        <button class="btn btn-primary mb-2 md:mb-0 md:mr-2 w-full md:w-auto" type="submit">Se connecter</button>
        <router-link :to="{ name: 'Home' }" class="btn btn-secondary w-full md:w-auto">Annuler</router-link>
      </div>

      <div class="flex items-center justify-between">
        <a href="/auth/forgot" class="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-400">Mot de passe oublié</a>
        <router-link :to="{ name: 'SignUp' }" class="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-400">S'inscrire</router-link>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { auth } from '@/plugins/firebase'

export default {
  metaInfo: {
    title: 'Connexion'
  },

  name: 'SignInView',

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
