import { Navbar, Container } from "react-bootstrap";
import Nav from "react-bootstrap/esm/Nav";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">VTIMOF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Github</Nav.Link>
            <Nav.Link href="#link">Linkedin</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
