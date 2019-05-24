import Vue from "vue";
export default Vue.extend({
    methods: {
        async signOutUser() {
            await this.$store.dispatch('githubSignout')
        }
    },
});