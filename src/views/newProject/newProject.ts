
import Vue from 'vue'
import { simpleUserData } from '@/storeModules/types';
import { Project } from '@/storeModules/projectMoFiles/projectTypes';
export default Vue.extend({
    data() {
        return {
            projectData: {
                projectName: ''
            }
        }
    },
    // Todo: Configure vuetify  
    methods: {
        async makeNewProject() {
            // Todo: in FB funtions if the project has no filters skip the function call
            // Todo: add fields to the values with forms
            if (this.$store.getters.isUserSignedIn === false) return 'User Is not Authenticated'
            let mySimpleUserData: simpleUserData = this.$store.getters.getSimpleUserData
            let testProject: Project = {
                projectName: this.projectData.projectName,
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
})