import Vue from 'vue'
import { userAuthentication } from '@/storeModules/types';
// ! There is a shade of transparancy in the background whenever the pop up opens 
// ! If I ever click off of the component to close it the data will not go up to the parent component (navbar)
// Either use a global event bus to push up. Bad code. || add it to store 
export default Vue.extend({
    data: () => ({
        userAuth: {
            email: '',
            password: ''
        }
    }),
    props: {
        openSignIn: Boolean
    },
    methods: {
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
})