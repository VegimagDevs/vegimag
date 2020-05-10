<template>
  <div :class="[isSuccess ? 'bg-teal-100 border-teal-500 text-teal-900' : 'bg-red-100 border-red-500 text-teal-900']" class="border-t-4 rounded-b px-4 py-3 shadow-md absolute bottom-0 right-0 w-full sm:max-w-sm sm:mx-4 sm:mb-4" role="alert">
    <div class="flex">
      <div class="py-1">
        <i :class="[isSuccess ? 'text-teal-500' : 'text-red-500']" class="fill-current h-6 w-6 mr-4 material-icons">{{ isSuccess ? 'done' : 'error' }}</i>
      </div>
      <div>
        <p class="font-bold">{{ title }}</p>
        <p class="text-sm">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',

  props: {
    type: String,
    title: String,
    message: String
  },

  computed: {
    isSuccess () {
      return this.type === 'success'
    }
  }
}
</script>
