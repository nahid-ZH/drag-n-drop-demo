import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import food from "./img/food.jpg";
import welcome from "./img/welcome.jpg";

const Product = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src={welcome} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={welcome} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={welcome} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Product;
