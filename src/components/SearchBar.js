import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function SearchBar() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-sm-center">
        <Col className="i-am-centered">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              <i class="bi bi-search"></i>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
