<template>
<div>
    <p>{{ count }}</p>
</div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            };
        },
        setup() {
            console.log('App component setup function called');
        },

        beforeCreate() {
            console.log('App component beforeCreate hook called');
            //此时 data 尚未初始化访问不到 this.count
            //console.log('Initial count value:', this.count);
        },

        //此时 data 已经初始化可以访问 this.count
        created() {
            console.log(this.count);
            console.log('App component created hook called');
        },

        beforeMount () {
            // document.querySelector('p').innerText = 'Before Mount Hook Modified Text';
            console.log('App component beforeMount hook called');
        },

        mounted() {
            console.log('App component mounted hook called');
        }
        
        
    }
</script>

<style scoped>

</style>