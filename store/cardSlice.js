import { createSlice } from "@reduxjs/toolkit";
import { cards } from "./Data";

const cardSlice = createSlice({
  name: "cards",
  initialState: { cards: cards },
  reducers: {
    initializeCards(state, action) {
      if (action.payload === null) {
        state.cards = {};
      } else {
        state.cards = action.payload;
      }
    },
    addCard(state, action) {
      state.cards = { ...state.cards, ...action.payload };
    },
    updateCard(state, action) {
      state.cards[action.payload.cardId] = {
        "deck": action.payload.deck,
        "id": action.payload.cardId,
        "question": action.payload.question,
        "answer": action.payload.answer,
      };
    },
    deleteCard(state, action) {
      delete state.cards[action.payload.cardId];
      console.log("DELETE CARD from cards");
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
