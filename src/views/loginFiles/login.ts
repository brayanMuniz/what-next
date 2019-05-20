import Vue from 'vue'
import { userAuthentication } from '@/storeModules/types';
export default Vue.extend({
    data() {
        return {
            userAuth: {
                email: '',
                password: ''
            },
        }
    },
    methods: {
        async signIn() {
            let payload: userAuthentication = this.userAuth
            await this.$store.dispatch('logInUserAuth', payload).then(res => {
                this.$router.push('/')
            }).catch(err => {
                console.log(err)
                alert('There was an error signing you in')
            })
        },
    }
})