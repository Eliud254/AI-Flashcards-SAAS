// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArVoU6N6kRRLltDKAkJNSbNQL0q8TwNfo",
  authDomain: "ai-flashcard-saas-55127.firebaseapp.com",
  projectId: "ai-flashcard-saas-55127",
  storageBucket: "ai-flashcard-saas-55127.appspot.com",
  messagingSenderId: "781833288128",
  appId: "1:781833288128:web:f8e0ef939fbcfca9fcb025",
  measurementId: "G-0EXFB8HRQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
