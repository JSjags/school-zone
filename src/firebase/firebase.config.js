import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_EDMkC6__iu9xBx7ePAmb_PFstqeFz0E",
  authDomain: "schoolzone-project.firebaseapp.com",
  projectId: "schoolzone-project",
  storageBucket: "schoolzone-project.appspot.com",
  messagingSenderId: "77743137094",
  appId: "1:77743137094:web:6c0d3bd1f8cd2f77018547",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
