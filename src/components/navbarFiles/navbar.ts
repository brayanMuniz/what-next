import Vue from "vue";
import signInComponent from '../signInFiles/signIn.vue'
export default Vue.extend({
    name: 'navbar',
    data() {
        return {
            drawer: false,
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
        }
    },
    components: {
        'sign-in': signInComponent
    }
});