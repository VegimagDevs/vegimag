<template>
  <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md absolute bottom-0" role="alert">
    <div class="flex">
      <div class="py-1"><check-icon class="fill-current h-6 w-6 text-teal-500 mr-4"/></div>
      <div>
        <p class="font-bold">{{ title }}</p>
        <p class="text-sm">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { CheckIcon } from 'vue-feather-icons'

enum AlertType {
  Success = 'success',
  Error = 'error'
}

const AlertProps = Vue.extend({
  props: {
    type: AlertType,
    title: String,
    message: String
  }
})

@Component({
  components: {
    CheckIcon
  }
})
export default class Alert extends AlertProps {
}
</script>
