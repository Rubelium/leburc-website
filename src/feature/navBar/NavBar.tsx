import "./navBar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Logo from "../../images/png/logoF2t4BlackWhiteCircleFilled.png";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Container>
        <Navbar expanded={expanded} bg="light" variant="light" fixed="top" expand="md">
          <Link className="navbar-link" to="/" onClick={() => setExpanded(false)}>
            <Navbar.Brand>
              <img src={Logo} className="d-inline-block" alt="F2T4 Logo" width="60" height="60" />
              {" "}FLOOR<sup className="navbar-title-superscript">4</sup>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse className="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="navbar-link" to="/" onClick={() => setExpanded(false)}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navbar-link" to="/about" onClick={() => setExpanded(false)}>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navbar-link" to="/contact" onClick={() => setExpanded(false)}>Contact</Link>
              </Nav.Link>
            </Nav>
            <Nav className="navbar-social-icons">
              <Nav.Link href="https://soundcloud.com/f2t4">
                <SocialIcon className="navbar-social-icon" url="https://soundcloud.com/f2t4" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/F2t4TV">
                <SocialIcon className="navbar-social-icon" url="https://www.youtube.com/F2t4TV" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://open.spotify.com/user/f2t4">
                <SocialIcon className="navbar-social-icon" url="https://open.spotify.com/user/f2t4" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/f2t4/">
                <SocialIcon className="navbar-social-icon" url="https://www.instagram.com/f2t4/" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/_F2t4">
                <SocialIcon className="navbar-social-icon" url="https://twitter.com/_F2t4" bgColor="#000000" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <br />
      <br />
    </>
  );
};

export default NavBar;