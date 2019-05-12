// Todo: if file length > 100 split up file
export interface RootState {
    version: string;
}

// **** User Interfaces
// Projects/$project/users/$user
export interface simpleUserData {
    userName: string;
    dateCreated: Date;
    userUID: string;
    profileImgLink?: string;
}
// Users/$user
export interface userData {
    userName: string;
    profileImgLink?: string;
    dateCreated: Date;
    // Todo: seperate this into its colleciton in firebase
    // projects: Array<simpleProjectData>;
}

export interface userAuthentication {
    email: string;
    password: string;
}

export interface newUser {
    userData: userData,
    userAuthentication: userAuthentication
}

export interface userState {
    userData?: userData;
    error: boolean;
}
// **** Proejects Interfaces
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