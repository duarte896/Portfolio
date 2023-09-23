import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/theme-context.ts";
import "../styles.scss";
import styles from "./Navbar.module.css";
import image from "../img/bootstrap-logo.png";

function Header() {
  const [mode, setMode] = useState("🌝");
  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    !isCurrentDark ? setMode("🌚") : setMode("🌝");
  };

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold ">
          Manuel Duarte - Full Stack Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Form className="d-flex align-items-center">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                onClick={handleThemeChange}
                label={mode}
              />
            </Form>
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold">
              Knowledge
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold">
              Gallery
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
