import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LawFirm from '../views/LawFirm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/lawfirm',
    name: 'lawfirm',
    component: LawFirm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
