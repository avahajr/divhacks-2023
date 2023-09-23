import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

function CollapsibleNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Tailor Trade</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#mission">Mission Statement</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Image
                height={25}
                width={25}
                roundedCircle
                // className=""
                src="https://tinyurl.com/4bremhx7"
                alt="avatar"
              ></Image>
              <NavDropdown drop="down-centered">
                <Nav.Link>My Profile</Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleNavbar;
