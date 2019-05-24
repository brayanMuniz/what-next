import Vue from "vue";
import userData from '@/components/userDataFiles/userData.vue'
import { newUser, userAuthentication } from '@/storeModules/types';
// import applePhotoCode from "@/assets/applePhoto.jpg"
import firebase from '@/firebaseConfig'
let auth = firebase.auth
// ? All user Authenticated routes do not have a /:userName, but the ones to view user profile do ? 
export default Vue.extend({
    name: "home",
    data() {
        return {
            newUser: {
                userName: '',
                dateCreated: new Date()
            },
            userAuth: {
                email: '',
                password: ''
            },
            showPassword: false,
            umaruChanLink: 'Find a good piture to add',
            vueLogo: 'https://dwglogo.com/wp-content/uploads/2017/09/Vue_js_logo.png',
            userAuthData: []
        }
    },
    async mounted() {

    },
    // Todo: if user is signed in but they do not have data get it and set a loading indicator
    methods: {
        async signInWithGitHub() {
            this.$store.dispatch('oauthWithGitHub')
            // push user to their profile
        }
    },
    components: {
        'user-data': userData
    }
});