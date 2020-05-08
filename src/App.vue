<template>
  <div id="app">
    <router-view/>

    <alert v-if="currentAlert" :type="currentAlert.type" :title="currentAlert.title" :message="currentAlert.message"/>
  </div>
</template>

<script>
import Alert from './components/Alert'

export default {
  computed: {
    currentAlert () {
      return this.$store.state.alert.currentAlert
    }
  },

  components: {
    Alert
  }
}
</script>

<style>
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */

.btn {
  @apply shadow font-bold py-2 px-4 rounded;
}

.btn:focus {
  @apply shadow-outline outline-none;
}

.btn-primary {
  @apply bg-purple-500 text-white;
}

.btn-primary:hover {
  @apply bg-purple-400;
}

.form-input {
  @apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight;
}

.form-input:focus {
  @apply outline-none bg-white border-purple-500;
}

@tailwind utilities;
</style>
