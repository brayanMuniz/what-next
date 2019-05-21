import { Module } from 'vuex';
import { githubState } from './githubTypes';
import { getters } from './githubGetters'
import { actions } from './githubActions'
import { mutations } from './githubMutations'

export const state: githubState = {

}

export const githubModule: Module<githubState, any> = {
    state, getters, mutations, actions
}