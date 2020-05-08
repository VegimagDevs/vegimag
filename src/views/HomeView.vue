<template>
  <div>
    <div class="flex mb-4">
      <div class="w-full bg-gray-500 h-12">
        <h1 class="">Vegimag</h1>
      </div>
    </div>

    <h2 class="text-center">Panier de la semaine</h2>
    <div class="flex flex-row bg-gray-200">
      <button class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2" v-for="ingredient in basket" :key="ingredient.name">{{ ingredient.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Les paniers de légume, c\'est trop bien !'
  },

  name: 'HomeView',

  computed: {
    basket () {
      return this.$store.state.basket.basket
    }
  }
}
</script>
