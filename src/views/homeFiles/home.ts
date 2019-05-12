import Vue from "vue";
import { newUser, userAuthentication } from '@/storeModules/types';
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
            showPassword: false
        }
    },
    created() {
        console.log(this.$store.getters.isUserSignedIn)
        if (this.$store.getters.isUserSignedIn) this.$router.push('/browse')
    },
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
        async signIn() {
            let payload: userAuthentication = this.userAuth
            await this.$store
                .dispatch('logInUserAuth', payload)
                .then((res) => {
                    console.log('​signIn ->', res);
                })
                .catch((err) => {
                    console.log('​signIn -> err', err);
                });
        },
    }
});