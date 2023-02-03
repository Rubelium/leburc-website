import { Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../png/logoF2t4BlackWhiteCircleFilled.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Container>
        <Navbar bg="light" variant="light" fixed="top" expand="md" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <Navbar.Brand href="#home">
            <img src={logo} className="d-inline-block" alt="F2T4 Logo" width="60" height="60" />
            {" "}FLOOR<sup>4</sup>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://soundcloud.com/f2t4">
                <SocialIcon url="https://soundcloud.com/f2t4" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/F2t4TV">
                <SocialIcon url="https://www.youtube.com/F2t4TV" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://open.spotify.com/user/f2t4">
                <SocialIcon url="https://open.spotify.com/user/f2t4" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/f2t4/">
                <SocialIcon url="https://www.instagram.com/f2t4/" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/_F2t4">
                <SocialIcon url="https://twitter.com/_F2t4" bgColor="#000000" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <br />
      <br />
    </>
  );
}

export default NavBar;