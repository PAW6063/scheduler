const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello');
    //res.sendFile(__dirnamec + 'index.js');
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}...`);
})