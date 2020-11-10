import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/one',
    name: 'One',
    component: Home,
  },
  {
    path: '/two',
    name: 'Two',
    component: Home,
  },
  {
    path: '/three',
    name: 'Three',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
