const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log(`Rick and Morty are listening on port ${port}`);
});
