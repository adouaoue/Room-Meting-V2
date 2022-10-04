  import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyBKKn2445pDfxzI-WRYSh0fX3ROIdcwRnM",
    authDomain: "rooms-test-5d4ae.firebaseapp.com",
    projectId: "rooms-test-5d4ae",
    storageBucket: "rooms-test-5d4ae.appspot.com",
    messagingSenderId: "951583487009",
    appId: "1:951583487009:web:3228daffe93bc5e4fcdf60"
  };
  firebase.initializeApp(firebaseConfig);

  export const db = firebase;

  var firepadRef = firebase.database().ref();

    
  export const userName =prompt('entre votre nom ?');

  const urlparams = new URLSearchParams(window.location.search);
  const roomId = urlparams.get("id");


if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}



  export default firepadRef;