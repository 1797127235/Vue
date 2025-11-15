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
</div>
</template>

<style scoped>

</style>