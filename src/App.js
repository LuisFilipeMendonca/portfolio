import { ThemeProvider } from "styled-components";

import GlobalStyle from "./style";

import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HomePage />
      <GlobalStyle />
    </div>
  );
}

export default App;
