import { configureStore } from "@reduxjs/toolkit";

import deckSlice from "./deckSlice";
import cardSlice from "./cardSlice";

export const store = configureStore({
  reducer: {
    deck: deckSlice.reducer,
    card: cardSlice.reducer,
  },
});
