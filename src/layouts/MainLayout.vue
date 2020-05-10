<template>
  <div class="container mx-auto px-4 mt-4">
    <nav-bar/>

    <router-view/>

    <div class="absolute bottom-0 right-0 mr-16 mb-10">
      <button class="btn-round h-10 w-10">^</button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'MainLayout',

  components: {
    NavBar
  }
}
</script>
