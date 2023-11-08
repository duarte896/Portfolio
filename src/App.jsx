import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Knowledge from "./components/Knowledge";
import Header from "./components/Navbar";
import Proyects from "./components/Proyects";
import About from "./components/About";
import { ThemeContext } from "./contexts/theme-context.ts";
import { useState } from "react";
import "./styles.scss";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="header">
          <div className="header-content">
            <Header />
            <Home />
            <Knowledge />
            <Proyects />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
