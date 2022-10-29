import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDN8Y06P32RfWlujloGqQntoPqRtgWPczo",
  authDomain: "test-b29d1.firebaseapp.com",
  projectId: "test-b29d1",
  storageBucket: "test-b29d1.appspot.com",
  messagingSenderId: "1095976684430",
  appId: "1:1095976684430:web:8fc9318ca94887e05532df"
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
