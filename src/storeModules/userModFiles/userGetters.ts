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
        if (state.userData == undefined) return {}
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
    isUserSignedIn: (state): boolean => {
        if (state.userData === undefined || auth === undefined || auth === null) return false
        return true;
    },
    // getProfileImageLink: (state) => {
    //     if (Object.keys(state.userData).length == 0 || state.userData.profileImageLink == undefined) {
    //         return state.defaultUserImage;
    //     }
    //     else {
    //         return state.userData.profileImageLink;
    //     }
    // },
    // getHiddenRoomsIDs: (state) => {
    //     if (state.hiddenRooms != null || state.hiddenRooms != undefined) {
    //         return state.hiddenRooms;
    //     }
    //     return [];
    // },
};