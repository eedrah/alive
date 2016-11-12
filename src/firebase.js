import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyCTYjmjGMILGabRxqLqiVYGwdSAgs1p6NA',
  authDomain: 'alive-74979.firebaseapp.com',
  databaseURL: 'https://alive-74979.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1029498420891'
})

module.exports = firebase
