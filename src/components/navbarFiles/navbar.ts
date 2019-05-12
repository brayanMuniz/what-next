import Vue from "vue";
export default Vue.extend({
    name: 'navbar',
    data() {
        return {
            drawer: null
        };
    },
    methods: {
        signOutUser() { }
    },
    computed: {
        getUsername(): String {
            if (this.$store.getters.isUserSignedIn) return this.$store.getters.getUserData.userName
            return ''
        }
    }
});