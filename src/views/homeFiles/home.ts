import Vue from "vue";
import { newUser, userAuthentication, simpleUserData } from '@/storeModules/types';
import { Project } from '@/storeModules/projectMoFiles/projectTypes';
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
        // if (this.$store.getters.isUserSignedIn) this.$router.push('/browse')
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
        async makeNewProject() {
            // Todo: in FB funtions if the project has no filters skip the function call
            if (this.$store.getters.isUserSignedIn === false) return 'User Is not Authenticated'
            let mySimpleUserData: simpleUserData = this.$store.getters.getSimpleUserData
            let testProject: Project = {
                projectName: 'testProject',
                dateCreated: new Date(),
                users: [mySimpleUserData],
                filters: {
                    categories: ['testing'],
                    languages: ['typescript'],
                    tags: ['hopeThisWorks'],
                }
            }
            this.$store.dispatch('makeNewProject', testProject).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })
        }
    }
});