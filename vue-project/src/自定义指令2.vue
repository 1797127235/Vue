<script setup>
  import { ref, onMounted } from 'vue';

  const divref = ref(null);

  onMounted(() => {
    divref.value.focus();
  });
</script>

<template>
<div>
  <input type="text" v-jujiao />
  <p v-color="'red'">fsdfs</p>
</div>
</template>

<style scoped>

</style>