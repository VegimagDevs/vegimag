<template>
  <div id="app">
    <router-view/>

    <alert v-if="currentAlert" :type="currentAlert.type" :title="currentAlert.title" :message="currentAlert.message"/>
  </div>
</template>

<script>
import Alert from './components/Alert'

export default {
  metaInfo: {
    title: 'Vegimag',
    titleTemplate: 'Vegimag - %s'
  },

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

.title-1 {
  @apply text-xl font-medium text-gray-800
}

.title-2 {
  @apply text-xl font-bold text-gray-800
}

.title-3 {
  @apply text-lg font-semibold text-gray-700
}

.btn {
  @apply font-bold py-2 px-4 rounded text-center;
}

.btn:focus {
  @apply shadow-outline outline-none;
}

.btn-primary {
  @apply bg-primary-500 text-white;
}

.btn-primary:hover {
  @apply bg-primary-400;
}

.btn-secondary {
  @apply bg-secondary-300 text-gray-800;
}

.btn-secondary:hover {
  @apply bg-secondary-400;
}

.btn-round {
  @apply rounded-full border-2 border-primary-500 text-primary-500 items-center justify-center transition-colors duration-100;
}

.btn-round:hover {
  @apply bg-primary-400 border-primary-400 text-white;
}

.auth-form {
  @apply shadow-md rounded px-4 pt-6 pb-8 mb-4;
}

@screen md {
  .auth-form {
    @apply px-8;
  }
}

.form-input {
  @apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight;
}

.form-input:focus {
  @apply outline-none bg-white border-purple-500;
}

@tailwind utilities;
</style>
