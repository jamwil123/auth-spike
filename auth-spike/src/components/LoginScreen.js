import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {

const firebaseConfig = {
  apiKey: "AIzaSyDSpJaeO8Kmju3kuExHLEbtoyIDSxRcL9U",
  authDomain: "ripgame-379cc.firebaseapp.com",
  projectId: "ripgame-379cc",
  storageBucket: "ripgame-379cc.appspot.com",
  messagingSenderId: "511220256517",
  appId: "1:511220256517:web:4811c2dc7bfb3d12fb316c",
  measurementId: "G-VMNCV4ZD05"
};

function createUser(email, password) {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return 'User Created'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode}`)
    // ..
  });

}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  return (
    <form className="form" onSubmit={(e)=>{
      e.preventDefault()
      let email = e.target['0'].value
      let password = e.target['1'].value
      createUser(email, password)
    }}>
    <label className='email'>
    Email:
    <input/>
     </label>

    <label className='password'>
    Password: 
    <input/>
    </label>

    <button className='button' >Login!</button>
    </form>
  )
}
