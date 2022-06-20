import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  charactersList: null,
  error: "",
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    return fetch("/characters")
      .then((response) => response.json())
      .then((characters) => {
        return characters;
      });
  }
);

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
      console.log(characterDictionary);
      state.charactersList = characterDictionary;

      state.charactersList = action.payload;
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
