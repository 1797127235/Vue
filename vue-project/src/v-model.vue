<template>
<div>
  名称: <input type="text" v-model.trim = goods.name> <br> <br>
  价格: <input type="text" v-model.trim.number = goods.price> <br> <br>
</div>
</template>

<script setup>
    import { reactive } from 'vue';
    const goods = reactive(
      {
        name: ' ',
        price: ' ' 
      }
    )
</script>

<style scoped>

</style>