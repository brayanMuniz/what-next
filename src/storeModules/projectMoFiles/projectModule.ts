import { Module } from 'vuex';
import { projectState } from './projectTypes';
import { getters } from './projectGetters'
import { actions } from './projectActions'
import { mutations } from './projectMutations'
export const state: projectState = {
    currentProject: undefined,
    allProjects: [],
}


export const projectModule: Module<projectState, any> = {
    state, getters, mutations, actions
}