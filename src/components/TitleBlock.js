import React from "react";
import { Container } from "react-bootstrap";

function TitleBlock(props) {
  return (
    <Container className="title-block d-flex justify-content-center align-items-center">
      {props.text}
    </Container>
  );
}

export default TitleBlock;
