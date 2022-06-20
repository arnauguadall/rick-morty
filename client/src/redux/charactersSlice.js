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
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.charactersList = action.payload;
      state.loading = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default charactersSlice.reducer;
