import { ActionTree } from 'vuex';
import { githubState } from './githubTypes';
import firebase from '@/firebaseConfig'
import { userAuthentication } from '../types';
let db = firebase.database;
let auth = firebase.auth
let firebaseRef = firebase
export const actions: ActionTree<githubState, any> = {
    // scope of what I want public_repo, read:org, read:user, read:packages	
    async oauthWithGitHub() {
        let provider = new firebaseRef.firebaseRef.auth.GithubAuthProvider();
        provider.addScope('public_repo, read:org, read:user, read:packages	');
        auth.signInWithPopup(provider)

            .then((result: any) => {
                if (result === null || result === undefined) return 'result is null'
                var token = result.credential.accessToken;
                var user = result.user;

                console.log(token)
                console.log(user)
            }).catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(error.code)
                console.log(error.message)
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
    }
}