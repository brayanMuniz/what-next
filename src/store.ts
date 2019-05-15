import Vue from 'vue';
import Vuex from 'vuex'
import { userModule } from '@/storeModules/userModFiles/userModule';
import { projectModule } from '@/storeModules/projectMoFiles/projectModule'
import { storageModule } from '@/storeModules/storageModule/storageModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    projectModule,
    storageModule
  },
})
