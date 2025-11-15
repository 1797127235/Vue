<template>
  <div class="parent">
    <h2>我是父组件</h2>
    <input v-model="msg" placeholder="输入要传给子组件的内容" />
    <Child :message="msg" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './components/child.vue'

const msg = ref('初始值：你好，子组件！')
</script>

<style scoped>
.parent {
  padding: 10px;
  border: 2px solid #555;
}
</style>
