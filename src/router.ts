import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/homeFiles/Home.vue';
import userSettings from './views/userSettingsFiles/userSettings.vue'
Vue.use(Router);

// Todo: make a router for the user
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Home
    },
    {
      path: '/join',
      name: 'join',
      component: Home
    },
    {
      path: '/:userName/userSettings',
      name: 'userSettings',
      component: userSettings
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },

  ],
});
