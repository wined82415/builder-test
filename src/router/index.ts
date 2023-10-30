import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/RenderView.vue')
    },
    {
      path: '/structured-data',
      name: 'structured-data',
      component: () => import('../views/StructuredDataView.vue')
    },
    {
      path: '/figma-to-builder',
      name: 'figma-to-builder',
      component: () => import('../views/FigmaToBuilderView.vue')
    }
  ]
})

export default router
