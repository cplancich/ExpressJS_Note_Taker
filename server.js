// Require express
const express = require('express');

// Require the 'db.json' file and store it in 'notes'
const dbJson = require('./db/db.json');

// Use express to initialize the 'app' server
const app = express();
const PORT = process.env.PORT || 3001;

// Have the 'app' use appropriate middleware to parse body data

// GET /nodes should return the notes.html file

// GET /api/notes should read the db.json file

    // res.json()

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note

// GET * should return the index.html file

// Use the 'app' to 'listen' to a specific 'port'
app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));