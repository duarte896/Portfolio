import "./App.css";
import Home from "./components/Home";
import { ThemeContext } from "./contexts/theme-context.ts";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
