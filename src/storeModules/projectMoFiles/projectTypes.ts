import { simpleUserData } from '../types';

// **** Projects Interfaces
export interface projectState {
    currentProject?: Project,
    allProjects?: Array<simpleProjectData>,
}

// Users/$user/Projects/$project
export interface simpleProjectData {
    projectUID: string;
    projectName: string;
    dateCreated: Date;
    users: Array<simpleUserData>;
}

// Todo: Be able to just import github project 
// Projects/$project
export interface Project {
    projectName: string;
    dateCreated: Date;
    users: Array<simpleUserData>;
    imgUrl?: URL;
    description?: string; // less than 500 characters
    repoLink?: URL;
    demoLink?: URL;
    filters?: {
        categories?: Array<string>;
        languages?: Array<string>;
        tags?: Array<string>;
    }
}