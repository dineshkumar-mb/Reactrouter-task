import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import { Card } from 'react-bootstrap';

function CardBase({ data }) {
  return (
    <div >
      <Card style={{ width: "23rem" }}>
        <Card.Img style={{height: "180px"}} variant="top" src={data.img} />
        <Card.Body>
          <Card.Title >{data.title}</Card.Title>
          <Card.Title >{data.description}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{data.date}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default CardBase