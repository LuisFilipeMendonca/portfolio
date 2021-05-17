import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style";

import theme from "./style/theme";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <HomePage />
          <AboutPage />
          <ProjectsPage />
          <ContactPage />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
