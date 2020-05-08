<template>
  <div class="container px-4 mx-auto flex min-h-screen items-center justify-center">
    <div class="max-w-lg w-full">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
