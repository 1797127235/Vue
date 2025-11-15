<script setup>
  import { onMounted, ref } from 'vue';

  const divref = ref(null);


  onMounted(() => {
    console.log(divref.value);
    divref.value.style.backgroundColor = 'red';
    divref.value.innerText = 'Hello Bit!';
  });
</script>


<template>
<div ref="divref">
  
</div>
</template>

<style scoped>

</style>