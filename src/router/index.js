import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/modules/User/components/UserView.vue'),
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('@/modules/Blogs/components/BlogView.vue'),
    },
    {
      path: '/posts',
      name: 'Posts',
      component: () => import('@/modules/Posts/components/PostsView.vue'),
    },
  ],
})

export default router
