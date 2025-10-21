<template>
  <div :title="msg">
    <p>{{ count }}</p>
    <button v-on:click="func">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const msg = '计数器'
const count = ref(0)

const func = () => {
  count.value++
}
</script>

<style scoped>
</style>
