import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Image, Col } from "react-bootstrap";
import { useWindowSize } from "@uidotdev/usehooks";

function CollapsibleNavbar(props) {
  let { _, width } = useWindowSize();
  console.log(width);
  return (
    <>
      <Navbar
        id="home"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav as={Col} md={4}>
              <Nav.Link href="#mission">Mission Statement</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav className="d-flex align" as={Col} md={4}>
              {width > 992 ? (
                <Navbar.Brand className="mx-auto" href="#home">
                  <img src="logo.png" width={300} alt="logo" />
                </Navbar.Brand>
              ) : (
                <></>
              )}
            </Nav>
            {/* <Col ms={4}></Col> */}
            <Nav
              style={{ marginLeft: "15em" }}
              className="d-flex align-items-center"
              as={Col}
              md={4}
            >
              <Image
                height={25}
                width={25}
                roundedCircle
                src="https://tinyurl.com/4bremhx7"
                alt="avatar"
              ></Image>
              <NavDropdown title={"Hey there, " + props.name + "!"}>
                <Nav.Link href="./profile" className="text-start">
                  My Profile
                </Nav.Link>
                <Nav.Link
                  href={"./" + props.name + "/trades"}
                  className="text-start"
                >
                  Active trades
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
