export interface Admin {
  adminID: string, 
  adminName: string, 
  adminEmail: string, 
  rootUser: boolean, 
  adminProfilePicture: string
}

export interface Category {
  categoryID: string, 
  categoryName: string
}

export interface Metatag {
  metatagID: string,
  metatagName: string
}

export interface Document {
  documentID: string, 
  documentName: string, 
  documentPath: string 
}

export interface Articles { 
  articleID: string,
  title: string,
  content: string,
  date: string,
  createdBy: string,
  category: Category[],
  metatags: Metatag[] | null,
  documents: Document[] | null,
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


