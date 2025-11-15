<script setup>
    import { ref } from 'vue';
    import BitSelect from '@/components/BitSelect.vue';

    // 选择的当前城市
    const selectedCity = ref('333');

</script>

<template>
<div>
    <h2>选择城市：{{ selectedCity }}</h2>
    <BitSelect v-model="selectedCity"/>
</div>
</template>

<style scoped>

</style>