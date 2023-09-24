import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

export default function SearchBar() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-sm-center">
        <Col className="i-am-centered">
          <Form method="GET" className="d-flex">
            <Form.Control
              id="filter"
              type="search"
              placeholder="Search..."
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button
              as={Link}
              to={"/posts"}
              className="rounded-pill"
              variant="outline-primary"
            >
              <i class="bi bi-search"></i>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
