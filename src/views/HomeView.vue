<template>
  <div class="container mx-auto px-4 mt-4">
    <nav-bar/>

    <h2 class="text-xl font-bold text-gray-800 text-center my-12">Panier de la semaine</h2>

    <div class="flex flex-row justify-around">
      <div class="flex flex-col rounded-lg border-2 w-32 h-32 mx-2" v-for="ingredient in basket" :key="ingredient.name">
        <div class="flex-grow rounded-t-lg bg-gray-200">
          <!--vegetable image-->
        </div>
        <div class="text-center rounded-b-lg px-2">
          {{ ingredient.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  metaInfo: {
    title: 'Les paniers de légume, c\'est trop bien !'
  },

  name: 'HomeView',

  computed: {
    basket () {
      return this.$store.state.basket.basket
    }
  },

  components: {
    NavBar
  }
}
</script>
