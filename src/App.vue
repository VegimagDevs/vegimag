<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;

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
