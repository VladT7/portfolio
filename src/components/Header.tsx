import { Navbar, Container } from "react-bootstrap";
import Nav from "react-bootstrap/esm/Nav";
import logo from "../media/logo.png";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="VTIMOF logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/VladT7">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/vladtimo/">
              LinkedIn
            </Nav.Link>
            <Nav.Link
              href="/media/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
