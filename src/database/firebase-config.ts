import 'firebase/firestore'
import firebase from 'firebase/app'
import configEnv from 'config'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: configEnv.FIREBASE_API_KEY,
  authDomain: configEnv.FIREBASE_AUTH_DOMAIN,
  projectId: configEnv.FIREBASE_PROJECT_ID,
  storageBucket: configEnv.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: configEnv.FIREBASE_MESSAGING_SENDER_ID,
  appId: configEnv.FIREBASE_APP_ID,
  measurementId: configEnv.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export { firebase as default }
