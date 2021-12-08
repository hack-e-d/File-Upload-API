const admin = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyBCbJ-PKG_pbWc1vdTMOz1sTzc9bFxHIrc",
    authDomain: "fir-test-project-b145a.firebaseapp.com",
    projectId: "fir-test-project-b145a",
    storageBucket: "fir-test-project-b145a.appspot.com",
    messagingSenderId: "861816435611",
    appId: "1:861816435611:web:d12c1e30710b155b17e73e",
    measurementId: "${config.measurementId}"
  };

// Initialize firebase admin SDK
admin.initializeApp(firebaseConfig);
// Cloud storage
const bucket = admin.storage().bucket();

module.exports = {
  bucket
}