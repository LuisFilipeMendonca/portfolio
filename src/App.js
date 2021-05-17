import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style";

import theme from "./style/theme";

import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <HomePage />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
