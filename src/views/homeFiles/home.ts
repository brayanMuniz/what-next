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
        }
    },
    async mounted() {
        console.log(auth.currentUser)
        console.log(this.$store.getters.userHasData)
        if (auth.currentUser && !this.$store.getters.userHasData) {
            console.log('Could load')
        }
    },
    // Todo: if user is signed in but they do not have data get it and set a loading indicator
    methods: {
        async makeNewUser() {
            // IF you use async and await some of the problems might go away
            let newUserData: newUser = {
                userData: this.newUser,
                userAuthentication: this.userAuth
            };
            this.$store
                .dispatch('makeNewUser', newUserData)
                .then((newMadeUser) => {
                    console.log('Made User', newMadeUser);
                })
                .catch((err) => {
                    alert('Could not make account');
                    alert(err.message);
                    console.log(err);
                });
        },
    },
    components: {
        'user-data': userData
    }
});