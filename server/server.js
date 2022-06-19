import "dotenv/config";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";

import User from "./models/user.js";


const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

// App configuration
const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connection to MongoDB Atlas
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Rick and Morty"))
  .catch((err) => console.log(err));

// Get characters from API
app.get("/characters", (req, res) => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      res.json(data.results);
    });
});

// Get single character from API
app.get("/character/:id", (req, res) => {
  fetch(`https://rickandmortyapi.com/api/character/${req.params.id}`)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    });
});

// Create new user using the User model for MongoDB
app.post("/user/create", (req, res) => {
  const { user, password } = req.body;
  const userData = {
    user,
    password,
  };

  const newUser = new User(userData);

  newUser
    .save()
    .then(() => res.json("User created!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Running the server
app.listen(5000, () => {
  console.log(`Rick and Morty are listening on port ${port}`);
});
