import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

signUpButton.addEventListener('click', signUp);
signInButton.addEventListener('click', signIn);

function signUp() {
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuario registrado:', user);
    })
    .catch((error) => {
      console.error('Error al registrarse:', error);
    });
}

function signIn() {
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuario ha iniciado sesión:', user);
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error);
    });
}


