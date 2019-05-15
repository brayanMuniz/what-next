import { ActionTree } from 'vuex';
import { projectState, Project } from './projectTypes';
import firebase from '@/firebaseConfig'
let db = firebase.database;

export const actions: ActionTree<projectState, any> = {
    // Todo: Add firbase functions to update image url, userData, filters
    async makeNewProject({ }, payload: Project) {
        // FB Functions updates userData automotically 
        return await db.collection('Projects').add(payload);
    },
}