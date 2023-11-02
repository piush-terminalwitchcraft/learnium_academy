import { AdminFeature } from "./Types";

export const ADMIN_FEATURES: AdminFeature[] = [
  {
    "name":"Articles", 
    "image": '/articles.png',
    "link": '/Admin/Articles'
  }, 
  {
    "name":"Classroom", 
    "image": '/classroom.png',
    "link": '/Admin/Classroom'
  }, 
  {
    "name":"Profile",
    "image": '/profile_photo.png',
    "link": '/Admin/Profle'
  }, 
  {
    "name":"Access",
    "image": '/admin_access.png',
    "link": '/Admin/Login'
  },
]

export const ADMIN_ARTICLES_FEATURES = [
  {
    "name": "Search & Edit articles",
    "image": "/upload_articles.png"
  }, 
  {
    "name": "Create new article", 
    "image": "/new_document.png"
  }
]
