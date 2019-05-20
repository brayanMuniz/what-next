import Vue from "vue";
export default Vue.extend({
    methods: {
        async signOutUser() {
            await this.$store.dispatch('signOutUserAuth').then(res => {
                this.$router.push('/')
            }).catch(err => {
                console.log(err)
                alert("Problem solving out")
            })
        }
    },
});