import { createSlice } from "@reduxjs/toolkit";

const deckSlice = createSlice({
  name: "deck",
  initialState: { deck: {} },
  reducers: {},
});

export const deckActions = deckSlice.actions;

export default deckSlice;
