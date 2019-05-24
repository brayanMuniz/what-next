import { ActionTree } from 'vuex';
import { userState, userAuthentication, userData, newUser } from '../types';
import firebase from '@/firebaseConfig'
import { githubUserData } from '../githubModuleFiles/githubTypes';
let auth = firebase.auth;
let db = firebase.database
let firebaseRef = firebase

// cntrol k + 0 to collapse all. Cntrl K + J uncollaopse
export const actions: ActionTree<userState, any> = {
    // **** Making the user
    async oauthWithGitHub({ dispatch }) {
        let githubProvider = new firebaseRef.firebaseRef.auth.GithubAuthProvider();
        githubProvider.addScope('public_repo, read:org, read:user, read:packages'); // reads only
        auth.signInWithPopup(githubProvider)

            .then(async (result: any) => {
                if (result === null || result === undefined) return 'result is null' // Todo: would need to configure something
                var token = result.credential.accessToken;
                await dispatch('addGitHubTokenFB', token)
                // after this set up vuex with relative data
            }).catch(error => {
                console.log(error.code)
                console.log(error.message)
            });
    },
    async addGitHubTokenFB({ }, newToken) {
        if (auth.currentUser === null || auth.currentUser === undefined) return Promise.reject('Could not make user in DB. User not authenticated')
        console.log('Adding Github Token in DB...');
        return await db.collection('Users').doc(auth.currentUser.uid).update({
            token: newToken
        });
    },
    async githubSignout() {
        auth.signOut().then(() => {
            console.log('Signout successful!')
            return 'Signout successful!'
        }, error => {
            console.log('Signout failed')
            'Signout failed'
        })
    },
    async createUserWithEmail({ }, payload: userAuthentication) {
        console.log('Creating User With email module...');
        return await auth.createUserWithEmailAndPassword(payload.email, payload.password);
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