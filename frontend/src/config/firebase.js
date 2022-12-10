import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBhvwdjfN6nzvfhzV3k_qCKdUFHfjB59AA",
  authDomain: "todo-app-169aa.firebaseapp.com",
  projectId: "todo-app-169aa",
  storageBucket: "todo-app-169aa.appspot.com",
  messagingSenderId: "273534382992",
  appId: "1:273534382992:web:25ce9d6894582fe71b7915",
  measurementId: "G-8460F6J132"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);