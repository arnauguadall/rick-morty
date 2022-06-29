import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    return fetch("/characters")
      .then((response) => response.json())
      .then((characters) => {
        return characters;
      });
  }
);

export { fetchCharacters };
