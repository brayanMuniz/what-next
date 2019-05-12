import { Module } from 'vuex';
import { getters } from './userGetters';
import { actions } from './userActions';
import { mutations } from './userMutations';
import { userState, RootState } from '../types'

export const state: userState = {
    userData: undefined,
    error: false
};


export const userModule: Module<userState, RootState> = {
    state, getters, mutations, actions
}