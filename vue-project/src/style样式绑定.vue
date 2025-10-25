<template>
<div>
  <p :style="{ color: colorstr, background:background }">比特</p>
  <p :style="styleObj">大梦想</p>
</div>
</template>

<script setup>
    import { ref,reactive } from 'vue'
    const colorstr = ref('red')
    const background = ref('yellow')

    const styleObj = reactive({
        color:'red',
        background:'yellow'
    })
</script>

<style scoped>

</style>