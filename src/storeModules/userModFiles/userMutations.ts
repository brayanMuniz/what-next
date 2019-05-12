import { MutationTree } from 'vuex';
import { userState, userData } from '../types';

export const mutations: MutationTree<userState> = {
    userDataLoaded(state, payload: userData) {
        state.error = false
        state.userData = payload;
    },

};
