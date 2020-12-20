import React from "react";
import { render } from "react-dom";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./GlobalStyles";
import { firebase } from "./libs/firebase.prod";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
