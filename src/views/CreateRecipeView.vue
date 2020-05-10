<template>
  <div>
    <h2 class="title-2 text-center my-12">Créer une recette</h2>

    <div class="flex flex-col md:flex-row md:flex-row-reverse">
      <div class="md:w-1/3 mb-5">
        <h3 class="title-3 mb-5">Ingrédients</h3>

        <div class="flex flex-row mb-5" v-for="(ingredient, index) in ingredients" :key="ingredient.key">
          <div class="flex mr-2">
            <button class="btn-secondary rounded w-8 h-8" @click="removeIngredient(index)">-</button>
          </div>
          <div class="flex-grow">
            <input class="flex-1 form-input mb-2" type="text" placeholder="Ingrédient" v-model="ingredient.name">
            <input class="w-1/2 form-input mr-2" type="number" placeholder="Quantité" v-model="ingredient.quantity">
            <select class="w-1/3 form-input" v-model="ingredient.unit">
              <option value="kg">kg</option>
              <option value="kg">g</option>
              <option value="kg">mg</option>
              <option value="kg">ml</option>
            </select>
          </div>
        </div>

        <button class="btn btn-secondary" @click="addIngredient">Ajouter</button>
      </div>

      <div class="md:w-2/3 md:mr-10 mb-10">
        <h3 class="title-3 mb-5">Étapes</h3>

        <div class="flex flex-row" v-for="(step, index) in steps" :key="step.key">
          <div class="flex flex-col mr-2">
            <button class="rounded-full border-2 border-gray-600 text-gray-600 items-center justify-center w-8 h-8 mb-2"> {{ index + 1 }} </button>
            <button class="btn-secondary rounded w-8 h-8" @click="removeStep(index)">-</button>
          </div>
          <div class="flex-grow">
            <textarea class="form-input mb-5" type="text" placeholder="Pour commencer..." v-model="step.content"></textarea>
          </div>
        </div>

        <button class="btn btn-secondary" @click="addStep">Ajouter</button>
      </div>
    </div>

    <button class="btn btn-primary">Envoyer</button>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Nouvelle recette'
  },

  name: 'CreateRecipeView',

  data: () => ({
    nextStepKey: 1,
    nextIngredientKey: 1,
    steps: [
      { key: 0, content: '' }
    ],
    ingredients: [
      { key: 0, name: '', quantity: 0, unit: '' }
    ]
  }),

  methods: {
    addIngredient () {
      this.ingredients.push({ key: this.nextIngredientKey++, name: '', quantity: 0, unit: '' })
    },

    removeIngredient (index) {
      this.ingredients.splice(index, 1)
    },

    addStep () {
      this.steps.push({ key: this.nextStepKey++, content: '' })
    },

    removeStep (index) {
      this.steps.splice(index, 1)
    }
  }
}
</script>
