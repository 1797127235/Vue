<template>
  <div class="child">
    <h3>我是子组件</h3>
    <p>父组件传来的消息：{{ message }}</p>
  </div>
</template>

<script setup>
defineProps(['message'])
</script>

<style scoped>
.child {
  padding: 10px;
  border: 1px solid #aaa;
  margin-top: 10px;
}
</style>

