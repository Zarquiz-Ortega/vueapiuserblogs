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
      component: () => import('@/views/modules/user/components/UserView.vue'),
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('@/views/modules/blogs/components/BlogView.vue'),
    },
    {
      path: '/posts',
      name: 'Posts',
      component: () => import('@/views/modules/posts/components/PostsView.vue'),
    },
  ],
})

export default router
