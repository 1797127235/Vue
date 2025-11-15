import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.directive('jujiao',{
    mounted(el,binding){
        el.focus();
    }
})

app.directive('color',{
    mounted(el,binding){
        el.style.color = binding.value;
    },

    updated(el,binding){
        el.style.color = binding.value;
    }
})

//注册路由
app.use(router)

app.mount('#app')
