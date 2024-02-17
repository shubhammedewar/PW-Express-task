const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Port = 4020;

let counter = 0;

app.get('/', (req, res) => {
    res.send(`counter:${counter}`);
});

app.use(bodyParser.json());

app.post('/increment', (req, res) => {
    counter = counter+1;
    res.send(`Counter incremented: ${counter}`);
});

app.post('/decrement', (req, res) => {
    counter--;
    res.send(`Counter decremented: ${counter}`);
});

app.listen(Port, () => {
    console.log("Server running at:", Port);
});
