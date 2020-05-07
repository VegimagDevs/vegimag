<template>
  <div>
    <h1 class="text-center">Vegimag</h1>
    <h2 class="text-center">Panier de la semaine</h2>
    <div class="flex flex-row bg-gray-200">
      <button class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2" v-for="ingredient in basket" :key="ingredient.name">{{ ingredient.name }}</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
  basket = this.$store.state.basket
}
</script>
