import { configureStore } from "@reduxjs/toolkit";

import characterSlice from "./charactersSlice";
import quotesSlice from "./quotesSlice";

export const store = configureStore({
  reducer: {
    characters: characterSlice,
    quotes: quotesSlice,
  },
});
