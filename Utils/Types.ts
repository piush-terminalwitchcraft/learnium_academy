export interface Admin {
  adminID: string, 
  adminName: string, 
  adminEmail: string, 
  rootUser: boolean, 
  adminProfilePicture: string
}

export interface Articles { 
  articleID: string,
  title: string,
  content: string,
  category: string[],
  metatags: string[],
  date: string,
  createdBy: string,
  documents: string[],
}

export interface Batch {
  batchID: string, 
  academicYear: string, 
  course: string, 
  batchName: string
  studentsID: string[]
}

export interface User {
  userID: string, 
  userName: string, 
  userEmail: string, 
  userProfilePicture: string,
  userPhoneNo: string,
  isStudent? : boolean,
  batchID? : string[],  
}





export interface AdminFeature {
  name: string, 
  image: string,
  link: string,
} 


