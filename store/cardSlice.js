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
      const newObj = {
        "id": action.payload.id,
        "deck": action.payload.deck,
        "question": action.payload.question,
        "answer": action.payload.answer,
      };
      state.cards[action.payload.id] = newObj;
      console.log("UPDATE CARD");
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
