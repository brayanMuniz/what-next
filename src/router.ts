import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/homeFiles/Home.vue';
import userSettings from './views/userSettingsFiles/userSettings.vue'
import store from './store';
import login from './views/loginFiles/login.vue'
import firebase from "@/firebaseConfig";
let auth = firebase.auth;
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
      beforeEnter: async (to, from, next) => {
        if (store.getters.userHasData === false && auth.currentUser !== null) {
          console.log('Getting user data from router.ts')
          await store.dispatch('getAndSetUserData').then(res => {
            next()
          })
        } else {
          next()
        }
      }
    },
    {
      // Todo: have a beforeEnter and quick out the user if they are signed in
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: async (to, from, next) => {
        if (store.getters.isUserSignedIn) {
          next('/')
        }
        next()
      }
    },
    {
      path: '/join',
      name: 'join',
      component: Home
    },
    {
      path: '/settings',
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
