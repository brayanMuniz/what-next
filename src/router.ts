import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/homeFiles/Home.vue';
import userSettings from './views/userSettingsFiles/userSettings.vue'
import login from './views/loginFiles/login.vue'
import join from './views/joinFiles/join.vue'
import newProject from './views/newProject/newProject.vue'
import browse from './views/browseFiles/browse.vue'

import store from './store';
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
      component: join
    },
    {
      path: '/settings',
      name: 'userSettings',
      component: userSettings
    },
    {
      path: '/newProject',
      name: 'newProject',
      component: newProject
    },
    {
      path: '/browse',
      name: 'browse',
      component: browse
    }
  ],
});
