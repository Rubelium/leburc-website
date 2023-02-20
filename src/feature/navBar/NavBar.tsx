import "./navBar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import Title from "../../images/png/Leburc_Logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Container>
        <Navbar expanded={expanded} bg="light" variant="light" fixed="top" expand="md">
          <Link className="navbar-link" to="/" onClick={() => setExpanded(false)}>
            <Navbar.Brand>
              <img src={Title} className="d-inline-block" alt="Leburc Logo" width="60" height="60" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse className="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="navbar-social-icons">
              <Nav.Link href="https://soundcloud.com/leburc">
                <SocialIcon className="navbar-social-icon" url="https://soundcloud.com/leburc" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://open.spotify.com/user/crrubel">
                <SocialIcon className="navbar-social-icon" url="https://open.spotify.com/user/crrubel" bgColor="#000000" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/_leburc/">
                <SocialIcon className="navbar-social-icon" url="https://www.instagram.com/_leburc/" bgColor="#000000" />
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