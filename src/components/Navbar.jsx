import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/theme-context.ts";
import "./styles.scss";
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
              Link
            </Nav.Link>
            <NavDropdown
              className="fw-bold"
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
