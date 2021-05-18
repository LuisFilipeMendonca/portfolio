import React from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle, { Background } from "./style";

import theme from "./style/theme";

import bg from "./assets/img/bg.png";

import Navbar from "./components/Navbar";

import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Background bg={bg} />
        <Navbar />
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
