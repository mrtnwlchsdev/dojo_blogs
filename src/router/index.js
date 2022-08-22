import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../components/Post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'home',
      component: Home
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: Post,
      props: true
    }
  ]
})

export default router
