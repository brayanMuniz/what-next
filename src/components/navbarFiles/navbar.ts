import Vue from "vue";
import signInComponent from '../loginFiles/login'
import firebase from '@/firebaseConfig'
let auth = firebase.auth
export default Vue.extend({
    name: 'navbar',
    data() {
        return {
            sideNavDrawer: null,
            signInDialog: false
        };
    },
    methods: {
        async signOutUser() {
            await this.$store.dispatch('githubSignout')
        }
    },
    computed: {
        getUserProfileURL() {
            if (this.$store.getters.isUserSignedIn && auth.currentUser !== null) return auth.currentUser.photoURL
            return ''
        },
        toUserData(): Object {
            return {
                name: 'userSettings',
            }
        }
    },
    components: {
        'sign-in': signInComponent
    }
});