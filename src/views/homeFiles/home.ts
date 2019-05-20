import Vue from "vue";
import userData from '@/components/userDataFiles/userData.vue'
import { newUser, userAuthentication, simpleUserData } from '@/storeModules/types';
import { Project } from '@/storeModules/projectMoFiles/projectTypes';
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
            umaruChanLink: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Forig03.deviantart.net%2F5f13%2Ff%2F2015%2F257%2F1%2F0%2F_true__umaru__himouto__umaru_chan__by_klikster-d99l0ye.png&f=1',
            vueLogo: 'https://dwglogo.com/wp-content/uploads/2017/09/Vue_js_logo.png'
        }
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
        }
    },
    components: {
        'user-data': userData
    }
});