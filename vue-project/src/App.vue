<template>
<div>
  <!-- 三元绑定 -->
  <p :class = "isActive ? 'active': ''">Active1</p>
  <!-- 对象语法绑定 -->
  <p :class = "{active: isActive}">Active2</p>
</div>
</template>

<script setup>
    import { ref } from 'vue'
    const isActive = ref(true)
</script>

<style scoped>
.active{
  color: red;
}
</style>