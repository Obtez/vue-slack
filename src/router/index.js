import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/channel',
    name: 'Channel',
    component: () => import('../views/Channel.vue'),
  },
  {
    path: '/direct-message',
    name: 'DirectMessage',
    component: () => import('../views/DirectMessage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
