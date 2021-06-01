import { createSlice } from "@reduxjs/toolkit";

const deckSlice = createSlice({
  name: "decks",
  initialState: { decks: {} },
  reducers: {
    initializeDecks(state, action) {
      if (action.payload === null) {
        state.decks = {};
      } else {
        state.decks = action.payload;
      }
    },
    addDeck(state, action) {
      state.decks = { ...state.decks, ...action.payload };
    },
  },
});

export const deckActions = deckSlice.actions;

export default deckSlice;
