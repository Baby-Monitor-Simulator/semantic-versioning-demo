const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

app.get('/help', (req, res) => {
    res.send('<h1>Help page</h1>');
});

app.get('/stupid', (req, res) => {
    res.send('<h1>you stupid</h1>');
});

app.listen(3000, () => {
    console.log('App started');
});
