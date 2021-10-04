import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6B2ehWxc2697afVQHBETYMC7EzwC-Vf0",
  authDomain: "reacthttp-6a97f.firebaseapp.com",
  databaseURL: "https://reacthttp-6a97f-default-rtdb.firebaseio.com",
  projectId: "reacthttp-6a97f",
  storageBucket: "gs://reacthttp-6a97f.appspot.com/",
  messagingSenderId: "979649843442",
  appId: "1:979649843442:web:4ef7cba89a54ff934bc06b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Getting Firebase storage access
export const storage = getStorage(firebaseApp);

// UPDATING CROS CONFIGURATION
//https://firebase.google.com/docs/storage/web/download-files#cors_configuration
