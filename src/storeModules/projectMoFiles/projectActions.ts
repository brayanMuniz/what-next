import { ActionTree } from 'vuex';
import { projectState } from './projectTypes';
import firebase from '@/firebaseConfig'
let auth = firebase.auth;
let db = firebase.database;

export const actions: ActionTree<projectState, any> = {

}