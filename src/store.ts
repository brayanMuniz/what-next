import Vue from 'vue';
import Vuex from 'vuex'
import { userModule } from '@/storeModules/userModFiles/userModule';
import { projectModule } from '@/storeModules/projectMoFiles/projectModule'
import { storageModule } from '@/storeModules/storageModule/storageModule'
import { githubModule } from '@/storeModules/githubModuleFiles/githubModule'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    projectModule,
    storageModule,
    githubModule
  },
})
