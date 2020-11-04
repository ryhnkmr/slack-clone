import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAWs9vkTchRJ7XMGnx09cVEqSxPp0MRQ8",
  authDomain: "slack-clone-b9697.firebaseapp.com",
  databaseURL: "https://slack-clone-b9697.firebaseio.com",
  projectId: "slack-clone-b9697",
  storageBucket: "slack-clone-b9697.appspot.com",
  messagingSenderId: "424067419540",
  appId: "1:424067419540:web:0896e5fb5690350fe81381"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
