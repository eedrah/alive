import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: '',
  authDomain: 'alive-74979.firebaseapp.com',
  databaseURL: 'https://alive-74979.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1029498420891'
})

module.exports = firebase.database()
