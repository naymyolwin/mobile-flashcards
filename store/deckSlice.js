import { createSlice } from "@reduxjs/toolkit";
import { decks } from "./Data";

const deckSlice = createSlice({
  name: "decks",
  initialState: { decks: decks },
  reducers: {
    // initilizeDecks(state, action) {
    //   state.deck = action.payload;
    // },
  },
});

export const deckActions = deckSlice.actions;

export default deckSlice;
