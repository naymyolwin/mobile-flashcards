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
    addNewCard(state, action) {
      state.decks = {
        ...state.decks,
        ...state.decks[action.payload.deckId].card.push(action.payload.cardId),
      };
      console.log("addNewCard to Deck");
    },
    deleteCard(state, action) {
      const index = state.decks[action.payload.deck].card.indexOf(
        action.payload.cardId
      );
      state.decks[action.payload.deck].card.splice(index, 1);
      console.log("DELETE Card from deck");
    },
  },
});

export const deckActions = deckSlice.actions;

export default deckSlice;
