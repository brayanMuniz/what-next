import { Module } from 'vuex'
import { getters } from './storageGetters'
import { actions } from './storageActions'
import { mutations } from './storageMutations'
import { storageState } from './storageTypes';
export const state: storageState = {}

export const storageModule: Module<storageState, any> = {
    state, getters, mutations, actions
}

