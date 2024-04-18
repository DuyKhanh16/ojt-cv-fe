import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDp3Qdnbox_t4Yd9hRdvgGF0tF_u4ZevWM",
    authDomain: "ojt-cv.firebaseapp.com",
    projectId: "ojt-cv",
    storageBucket: "ojt-cv.appspot.com",
    messagingSenderId: "19532954134",
    appId: "1:19532954134:web:da185449940cae0950d337"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, auth, storage };
