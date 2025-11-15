import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Find from '../components/Find.vue'
import My from '../components/My.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
