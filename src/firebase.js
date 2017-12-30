import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAjgKsB0N5UZu8_YnbjMVzhDa6_5XENXkk",
  authDomain: "first-flight-with-friend-a4f39.firebaseapp.com",
  databaseURL: "https://first-flight-with-friend-a4f39.firebaseio.com",
  projectId: "first-flight-with-friend-a4f39",
  storageBucket: "first-flight-with-friend-a4f39.appspot.com",
  messagingSenderId: "181746966441"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();