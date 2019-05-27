import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import { createProvider } from './vue-apollo'

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.config.productionTip = true;


new Vue({
  router,
  store,
  // apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount('#app');
