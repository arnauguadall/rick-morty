import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "../services/api.js";

const initialState = {
  loading: false,
  charactersList: null,
  error: "",
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    handleCharacterFav: (state, action) => {
      state.charactersList[action.payload].fav =
        !state.charactersList[action.payload].fav;
    },
  },
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      const characterDictionary = action.payload.reduce(
        (accumulatedCharacters, currentCharacter) => {
          accumulatedCharacters[currentCharacter.id] = {
            ...currentCharacter,
            fav: false,
          };
          return accumulatedCharacters;
        },
        {}
      );
      state.charactersList = characterDictionary;
      state.loading = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { handleCharacterFav } = charactersSlice.actions;

export default charactersSlice.reducer;
