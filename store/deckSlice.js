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
    },
    deleteCard(state, action) {
      const index = state.decks[action.payload.deck].card.indexOf(
        action.payload.cardId
      );
      state.decks[action.payload.deck].card.splice(index, 1);
    },
    updateDeck(state, action) {
      state.decks[action.payload.id].name = action.payload.name;
    },
    deleteDeck(state, action) {
      console.log("before delete");
      console.log(state.decks);
      delete state.decks[action.payload.id];
      console.log("after delete");
      console.log(state.decks);
    },
  },
});

export const deckActions = deckSlice.actions;

export default deckSlice;
