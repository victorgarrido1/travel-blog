// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnVF4hOvmt_HQdiH3nuiPo1berlzS4-yI",
  authDomain: "travel-blog-f25ef.firebaseapp.com",
  projectId: "travel-blog-f25ef",
  storageBucket: "travel-blog-f25ef.appspot.com",
  messagingSenderId: "831040147673",
  appId: "1:831040147673:web:978ca3d6056eb056e36ec8",
  measurementId: "G-15FV6SMVWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)


//export the initialized storage
export { app, analytics, storage };
