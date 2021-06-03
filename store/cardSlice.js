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
      //console.log(action.payload.cardId);

      delete state.cards[action.payload.cardId];

      // if (delete state.cards[action.payload.cardId]) {
      //   console.log("Card Deleted");
      // } else {
      //   console.log("Deleting Card Failed");
      // }

      // state.cards = Object.keys(state.cards).filter((key) => {
      //   state.cards[key] !== action.payload.cardId;
      // });
      // console.log(state.cards);
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
