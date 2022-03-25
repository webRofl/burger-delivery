import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDIklJByBDuJ4UrWmnCPDpgsmfhgczOPmo',
  authDomain: 'hot-burgers-a6c0d.firebaseapp.com',
  databaseURL: 'https://hot-burgers-a6c0d-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
