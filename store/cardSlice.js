import { createSlice } from "@reduxjs/toolkit";
import { cards } from "./Data";

const cardSlice = createSlice({
  name: "cards",
  initialState: { cards: cards },
  reducers: {
    // initilizeCards(state, action) {
    //   state.card = action.payload;
    // },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
