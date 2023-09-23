import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

function CollapsibleNavbar(props) {
  return (
    <>
      <Navbar
        id="home"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#mission">Mission Statement</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Image
                height={25}
                width={25}
                roundedCircle
                src="https://tinyurl.com/4bremhx7"
                alt="avatar"
              ></Image>
              <NavDropdown align="end" title={"Hey there, " + props.name + "!"}>
                <Nav.Link href="./profile" className="text-start">
                  My Profile
                </Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleNavbar;
