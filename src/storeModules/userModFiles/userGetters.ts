import { GetterTree } from 'vuex';
import { userState, simpleUserData } from '../types';
import firebase from '@/firebaseConfig'
let auth = firebase.auth
export const getters: GetterTree<userState, any> = {
    userErr(state): boolean {
        if (state.error) return true
        return false
    },
    getUserData(state): object {
        if (state.userData === undefined) return {}
        return state.userData
    },
    getSimpleUserData(state, getters): object {
        if (state.userData === undefined || auth.currentUser === null) return {}
        let mySimpleUserData: simpleUserData = {
            userName: state.userData.userName,
            dateCreated: state.userData.dateCreated,
            userUID: auth.currentUser.uid
        }
        return mySimpleUserData
    },
    getUserGitHubToken(state): string {

        return ''
    },
    userHasData(state): boolean {
        if (state.userData === undefined) return false
        return true
    },
    isUserSignedIn: (): boolean => {
        if (auth === undefined || auth === null) return false
        return true;
    },
};