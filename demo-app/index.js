const express = require('express');
const _ = require('lodash');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, insecure world!');
});

app.listen(3222, () => {
    console.log('App running on http://localhost:3222');
});
