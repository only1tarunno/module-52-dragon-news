import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWpCzQasWzaOhmk6YiYHXDuO3rKyaUa-c",
  authDomain: "module-52-dragon-news.firebaseapp.com",
  projectId: "module-52-dragon-news",
  storageBucket: "module-52-dragon-news.appspot.com",
  messagingSenderId: "940478307524",
  appId: "1:940478307524:web:ce09d2e360e9897dfa3d91",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
