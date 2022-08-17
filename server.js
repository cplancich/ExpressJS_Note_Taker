// Require express
const express = require('express');
const path = require('path');
// const {uuid} = require('uuid');
const {readFromFile, writeToFile, readAndAppend} = require('./helpers/helper');

// Require the 'db.json' file and store it in 'notes'
// const dbJson = require('./db/db.json');

// Use express to initialize the 'app' server
const app = express();
const PORT = process.env.PORT || 3001;

// Have the 'app' use appropriate middleware to parse body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET /nodes should return the notes.html file
app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET /api/notes should read the db.json file
app.get('/api/notes', (req, res)=> {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    if ( title && text ) {
        const newNote = {
            title, 
            text,
            // id: uuid(),
        }

        readAndAppend(newNote, './db/db.json');
        res.status(201).json("New note successfully saved")
    } else {
        res.status(500).json('Error!')
    }
    
});

// GET * should return the index.html file
app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Use the 'app' to 'listen' to a specific 'port'
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));