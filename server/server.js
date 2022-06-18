import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 5000;



app.get("/characters", (req, res) => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            res.json(data.results);
        })
});

app.listen(5000, () => {
  console.log(`Rick and Morty are listening on port ${port}`);
});
