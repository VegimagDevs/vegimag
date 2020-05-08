import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAPbifSfwU5231lmVog2jgsap_obuV8fhg',
  authDomain: 'vegimag-b0a13.firebaseapp.com',
  databaseURL: 'https://vegimag-b0a13.firebaseio.com',
  projectId: 'vegimag-b0a13',
  storageBucket: 'vegimag-b0a13.appspot.com',
  messagingSenderId: '466157461876',
  appId: '1:466157461876:web:438471919584fb0ef24c21'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

export {
  firebase,
  auth,
  firestore
}
