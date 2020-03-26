import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import theme from "styledComp/theme";
import { ThemeProvider } from "styled-components";
import StateProvider from "store/StateProvider";
ReactDOM.render(
  <StateProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StateProvider>,
  document.getElementById("root")
);
