import { ToastOptions } from "react-toastify";
import { AdminFeature } from "./Types";

export const ADMIN_FEATURES: AdminFeature[] = [
  {
    "name":"Articles", 
    "image": '/articles.png',
    "link": '/admin/articles'
  }, 
  {
    "name":"Classroom", 
    "image": '/classroom.png',
    "link": '/admin/classroom'
  }, 
  {
    "name":"Profile",
    "image": '/profile_photo.png',
    "link": '/admin/profile'
  }, 
  {
    "name":"Access",
    "image": '/admin_access.png',
    "link": '/admin/login'
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

export const TOAST_STYLE: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}
