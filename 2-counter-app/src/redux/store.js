// store reactteki context'teki state yönetimidir. contextte ne yapıyorduk? user context theme context vs bir sürü contextin her birini bir yerde birleştiirp sarmalıyorduk. burada  yapacağımız şey de o. birden fazla redux tanımımız olacak. user için tema için dil için çektiğimiz farklı redux tanımlarını store da birleştirip konfigüre edicez. en dıştaki state e prop olarak vereceğiz.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  // bunu fonksiton olarak tanımlayıp dışa aktardık ve içinde reducer adında field'imiz bekliyor.
  reducer: {
    counter: counterReducer,
  },
});

// store i indexjs 'e import et, sarmala
// import store from "./redux/store";
//import { Provider } from "react-redux";
