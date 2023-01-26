import { Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../png/logoF2t4BlackWhiteCircleFilled.png";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="d-inline-block align-top" alt="logo" width="30" height="30" />
            {" "}FLOOR<sup>4</sup>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#spotlights">Spotlights</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://soundcloud.com/f2t4">
                <SocialIcon url="https://soundcloud.com/f2t4" />
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/F2t4TV">
                <SocialIcon url="https://www.youtube.com/F2t4TV" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/f2t4/">
                <SocialIcon url="https://www.instagram.com/f2t4/" />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/_F2t4">
                <SocialIcon url="https://twitter.com/_F2t4" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;