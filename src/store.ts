import Vue from 'vue';
import Vuex from 'vuex'
import { userModule } from '@/storeModules/userModFiles/userModule';
import { projectModule } from '@/storeModules/projectMoFiles/projectModule'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    projectModule
  },
})
