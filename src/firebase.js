import { initializeApp } from "firebase/app"

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBRRFfh_gc0E8AM_HbJSPI1nd0NUJVnas0",
  authDomain: "litmart-e3fa5.firebaseapp.com",
  projectId: "litmart-e3fa5",
  storageBucket: "litmart-e3fa5.firebasestorage.app",
  messagingSenderId: "1083878706801",
  appId: "1:1083878706801:web:aa42301a35457f95b615d0",
  measurementId: "G-8JYKTKZ244"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()

export default app