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
<<<<<<< HEAD
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
=======
    component: () => import('../views/About'),
  },
];
>>>>>>> 94131a93c5a12da5d54746758a9325b7ab2f9dc2

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
