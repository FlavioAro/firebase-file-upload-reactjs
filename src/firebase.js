import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAB1-2u9c",
    authDomain: "fir-react-storage.firebaseapp.com",
    projectId: "fir-react-storage",
    storageBucket: "fir-react-storage.appspot.com",
    messagingSenderId: "9428465",
    appId: "1:942593828465:web:ab48ddd0"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };