import { GetterTree } from 'vuex';
import { userState } from '../types';
export const getters: GetterTree<userState, any> = {
    userErr(state) {
        if (state.error) return true
        return false
    },
    // getUserAuth: (state) => {
    //     return state.userAuth;
    // },
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
    // isUserSignedIn: (state) => {
    //     if (Object.keys(state.userData).length == 0 || state.userAuth == null) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }
};