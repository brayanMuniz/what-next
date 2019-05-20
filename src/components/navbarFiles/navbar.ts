import Vue from "vue";
import signInComponent from '../loginFiles/login'
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
            await this.$store.dispatch('signOutUserAuth')
        }
    },
    computed: {
        getUsername(): String {
            if (this.$store.getters.isUserSignedIn) return this.$store.getters.getUserData.userName
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