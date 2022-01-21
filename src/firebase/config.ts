import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDcvp4axnFDqlPDZkbIf13as7zPgAhCMMk',
  authDomain: 'design-mocks.firebaseapp.com',
  projectId: 'design-mocks',
  storageBucket: 'design-mocks.appspot.com',
  messagingSenderId: '78218818086',
  appId: '1:78218818086:web:caf5b9b383802d074a2ce7'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
