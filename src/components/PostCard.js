import React from "react";
import { Card } from "react-bootstrap";

function PostCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://tinyurl.com/3hzuvj9y" />
      <Card.Body>
        <Card.Title>{props.itemName}</Card.Title>
        <Card.Text>{props.itemDescription}</Card.Text>
        <Card.Footer>
          <small className="text-muted">{props.date}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
