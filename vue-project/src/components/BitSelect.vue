<template>
<div>
    <!-- <select :value = "modelValue" 
    @change="$emit('update:modelValue', $event.target.value)">
        <option value="111">北京</option>
        <option value="222">上海</option>
        <option value="333">广州</option>
        <option value="444">杭州</option>
    </select> -->

    <select v-model="model">
        <option value="111">北京</option>
        <option value="222">上海</option>
        <option value="333">广州</option>
        <option value="444">杭州</option>
    </select>
</div>
</template>

<script setup>
    // defineProps({
    //     modelValue: {
    //         type: String,
    //         required: true
    //     }
    // });

    const model = defineModel()
    



</script>

<style scoped>

</style>