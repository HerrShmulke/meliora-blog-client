import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Index.vue'),
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: () => import('../views/Post.vue'),
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('../views/Contacts.vue'),
    },
  ],
});

export default router;
