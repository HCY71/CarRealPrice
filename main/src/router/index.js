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
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  },
];
=======
    component: () => import('../views/About')
  },{
    path: '/:model',
    name: 'Model',
    component: () => import("../views/About")
  }
]
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
