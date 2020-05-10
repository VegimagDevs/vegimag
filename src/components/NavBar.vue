<template>
  <div class="flex items-center border-b py-2">
    <div class="flex-grow">
      <router-link :to="{ name: 'Home' }" class="title-1">Vegimag</router-link>
    </div>
    <div class="flex-shrink">
      <router-link :to="{ name: 'SignIn' }" class="inline-block align-baseline font-bold text-purple-500 hover:text-purple-400 mr-4">Se connecter</router-link>
      <router-link :to="{ name: 'SignUp' }" class="btn btn-primary">S’inscrire</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
