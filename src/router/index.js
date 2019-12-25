import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LawFirm from '../views/LawFirm.vue';
import Services from '../views/Services.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';

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
  {
    path: '/services',
    name: 'services',
    component: Services,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
