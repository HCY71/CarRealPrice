import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
  },
  {
    path: '/:model',
    name: 'Model',
    component: () => import("../views/About")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/newPost',
    name: 'NewPost',
    component: () => import('../views/NewPost')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
