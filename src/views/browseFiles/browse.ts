import Vue from 'vue'
import projectCards from '@/components/projectCards/projectCards'
export default Vue.extend({
    // Search queruy for projectname 
    // {
    //     search(query: "what-next", type: REPOSITORY, first: 20) {
    //       edges {
    //         node {
    //           ... on Repository {
    //             name
    //             id
    //             nameWithOwner
    //             url
    //             createdAt
    //             description
    //             homepageUrl
    //             primaryLanguage {
    //               name
    //               id
    //             }
    //             languages(first: 5) {
    //               nodes {
    //                 name
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // Specific Repo
    // fragment BrowseRepository on Repository {
    // 	repository(owner: "brayanMuniz", name: "what-next") {
    // 		description
    // 		url
    // 		nameWithOwner
    // 		owner {
    // 			avatarUrl
    // 		}
    // 		languages(first: 5) {
    // 			nodes {
    // 				name
    // 			}
    // 		}
    // 	}
    // }


    components: {
        'project-card': projectCards
    }
})