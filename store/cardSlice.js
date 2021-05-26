import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: { card: {} },
  reducers: {},
});

export const cardActions = cardSlice.actions;

export default cardSlice;
