const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const cors = require('cors')
const firebase = require('./firebase')

const app = express()

const corsOptions = {
    origin: '*',
    credentials: true,
  };

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

const upload = multer({
    storage: multer.memoryStorage()
})

app.get('/', (req,res) => {
    console.log("Server / api hit");
    res.status(200).send("{'Message' : 'Server On'}");
})

app.post('/upload', (req, res) => {
    console.log(req);
    var data = req.body;
    console.log(typeof(data));
    res.status(200).send("{'message' : 'OK'}");
    // if(!req.file) {
    //     console.log("No file in /upload api call");
    //     res.status(400).send("Error: No files found");
    // } else {
    //     const blob = firebase.bucket.file(req.file.originalname);
        
    //     const blobWriter = blob.createWriteStream({
    //         metadata: {
    //             contentType: req.file.mimetype
    //         }
    //     });
        
    //     blobWriter.on('error', (err) => {
    //         console.log(err)
    //     });
        
    //     blobWriter.on('finish', () => {
    //         console.log("File uploaded with /upload api call");
    //         res.status(200).send("File uploaded.");
    //     });
        
    //     blobWriter.end(req.file.buffer);
    // }
})

app.listen(3000, () => {
    console.log('🚀Server listening on port 3000');
});