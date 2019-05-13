import { simpleUserData } from '../types';

// **** Proejects Interfaces
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
// Projects/$project
export interface Project {
    projectName: string;
    dateCreated: Date;
    categories?: Array<string>;
    description?: string; // less than 500 characters
    repoLink?: string;
    // languages, users, demoLink, tags, languages
}