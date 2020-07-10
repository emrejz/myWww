import StateProvider from "../src/store/StateProvider";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styledComp/theme";

import React from "react";

import "./storybook.scss";

addDecorator((S) => (
  <StateProvider>
    <ThemeProvider theme={theme}>
      <S />
    </ThemeProvider>
  </StateProvider>
));
configure(require.context("../src", true, /\.stories\.tsx$/), module);
