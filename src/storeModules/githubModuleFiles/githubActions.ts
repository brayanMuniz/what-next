import { ActionTree } from 'vuex';
import { githubState } from './githubTypes';
import firebase from '@/firebaseConfig'
let db = firebase.database;
let auth = firebase.auth
let firebaseRef = firebase
export const actions: ActionTree<githubState, any> = {

}