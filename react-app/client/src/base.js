import Rebase from 're-base';
import firebase from 'firebase';



var config = {
    apiKey: "AIzaSyBGB0fC5NSPKu6GwxfKUE7dY-MwSZNHlDk",
    authDomain: "pixelart-d1a2b.firebaseapp.com",
    databaseURL: "https://pixelart-d1a2b.firebaseio.com",
    projectId: "pixelart-d1a2b",
    storageBucket: "pixelart-d1a2b.appspot.com",
    messagingSenderId: "91681057342"
  };

  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database())

  export { app, base };
