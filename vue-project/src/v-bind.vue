<template>
<div :title = "msg">
  <p>{{ msg }}</p>
</div>
</template>

<script setup>
    import { ref } from 'vue'
    const msg = ref('Hello Vue3 + Vite + Ant Design Vue')


</script>

<style scoped>

</style>