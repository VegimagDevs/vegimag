<template>
  <div>
    <h2 class="title-2 text-center my-12">Panier de la semaine</h2>

    <div class="flex flex-row justify-around" v-if="basket">
      <div class="flex flex-col rounded-lg border-2 w-32 h-32 mx-2" v-for="ingredient in basket.ingredients" :key="ingredient.name">
        <div class="flex-grow rounded-t-lg bg-gray-200">
          <!--vegetable image-->
        </div>
        <div class="text-center rounded-b-lg px-2">
          {{ ingredient.name }}
        </div>
      </div>
    </div>

    <div class="flex flex-row">
      <h2 class="flex-grow title-2">Recettes</h2>
      <router-link :to="{ name: 'CreateRecipe' }" class="btn btn-primary">Nouvelle recette</router-link>
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
      return this.$store.getters['basket/basket']
    }
  }
}
</script>
