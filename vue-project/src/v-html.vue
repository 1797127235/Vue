<script setup>
  import {ref} from 'vue'
  const myRef = ref('<span style = "color: red;">Hello World</span>')
</script>

<template>
  <div>
    <p v-html="myRef"></p>
  </div>
</template>

<style scoped></style>
