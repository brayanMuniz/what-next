import { ActionTree } from 'vuex';
import { userState, userAuthentication, userData, newUser } from '../types';
import firebase from '@/firebaseConfig'
let auth = firebase.auth;
let db = firebase.database
// Because of typescript dont need to add any extra security
export const actions: ActionTree<userState, any> = {
    // **** Making the user
    async createUserWithEmail({ }, payload: userAuthentication) {
        console.log('Creating User With email module...');
        return auth.createUserWithEmailAndPassword(payload.email, payload.password);
    },
    async lookForuserName({ }, userName: string) {
        if (userName === undefined || userName === null) return Promise.reject('userName is not defined')
        return db.collection('Users').where('userName', '==', userName).get();
    },
    async sendEmailVerification({ }) {
        if (auth.currentUser === null || auth.currentUser === undefined) return Promise.reject('Null')
        return await auth.currentUser.sendEmailVerification();
    },
    async createUserInDB({ }, payload: userData) {
        if (auth.currentUser === null || auth.currentUser === undefined) return Promise.reject('Could not make user in DB. User not authenticated')
        console.log('Creating User in DB...');
        return await db.collection('Users').doc(auth.currentUser.uid).set(payload);
        // Todo: configure rules in firebase so only the user with his UID can change his data
    },
    async makeNewUser({ dispatch, commit }, payload: newUser) {
        console.log('Making User. In Module...');
        let madeUser = await dispatch('createUserWithEmail', payload.userAuthentication);
        dispatch('sendEmailVerification');
        await dispatch('createUserInDB', payload.userData);
        commit('userDataLoaded', payload.userData);
        return madeUser;
    },
    // Todo: figure out how to test better so you dont have to make a new user every time
    // **** Updating users data
    // **** Getting user data
    async getAndSetUserData({ commit }) {
        if (auth.currentUser === null || auth.currentUser === undefined) return Promise.reject('User not authorized')
        let userData = await db.collection('Users').doc(auth.currentUser.uid).get()
        // Todo: if user Data is undefined return null or something 
        commit('userDataLoaded', userData.data());
        return userData.data();
    },
    async logInUserAuth({ }, payload: userAuthentication) {
        console.log('Logging in User from userModule...');
        await auth.signInWithEmailAndPassword(payload.email, payload.password);
    },
    // **** Sign Out User
    async signOutUserAuth({ commit }) {
        console.log('Sign Out User From userModule..');
        commit('clearUserData')
        return await auth.signOut();
    }
};