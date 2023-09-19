import styles from "./Home.module.css";
import Knowledge from "./Knowledge";
import Header from "./Navbar";
import "./styles.scss";
function Home() {
  return (
    <div className="header">
      <div className="header-content">
        <Header />
        <div className="container ">
          <div className="row ">
            <div className="col d-flex flex-column justify-content-center">
              <h1>Full Stack Developer</h1>
              <h3>The best way to predict the future is to invent it</h3>
            </div>
            <div className="col d-flex justify-content-end">
              <div className={styles.animation}>
                <object
                  aria-label="rocket animation"
                  type="image/svg+xml"
                  data="https://cdn.svgator.com/images/2021/12/rocket-animation-interactive-tutorial.svg"
                  alt="rocket animation interactive"
                  img=""
                  width="130%"
                ></object>
              </div>
            </div>
          </div>
        </div>
        <Knowledge />
      </div>
    </div>
  );
}
export default Home;

// Frases:
// I have not failed. I've just found 10,000 ways that won't work

/*import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context.ts";
import logoIcon from "../img/backend-logo.png";
import styles from "./Home.module.css";
import "./styles.scss";
function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo-section">
          <img src={logoIcon} alt="logo" />
          <span>Light/Dark mode app</span>
        </a>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === "light"}
            />
            <button
              type="button"
              className={`toggle-btn__input-label`}
              onClick={handleThemeChange}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;*/
