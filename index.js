const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express()

// const upload = multer({
//     dest: 'images/'
// });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, 'tempFile' + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

const firebaseConfig = {
    apiKey: "AIzaSyBCbJ-PKG_pbWc1vdTMOz1sTzc9bFxHIrc",
    authDomain: "fir-test-project-b145a.firebaseapp.com",
    projectId: "fir-test-project-b145a",
    storageBucket: "fir-test-project-b145a.appspot.com",
    messagingSenderId: "861816435611",
    appId: "1:861816435611:web:d12c1e30710b155b17e73e",
    measurementId: "${config.measurementId}"
  };

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        res.status(400).send("Error: No files found")
    } else {
        // fs.writeFile('images/'+req.file.filename, req.file.)
        console.log("File saved to local !");

        res.status(200).send("file uploaded !");
    }
})

app.listen(8080, () => {
    console.log('🚀Server listening on port 8080')
})