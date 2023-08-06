import React from "react";
import CartContent from "./ShopCart/CartContent";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default ShopCart;

function ShopCart() {
  return (
    <Container>
      <Row>
        <h1>Hello</h1>

        <Col lg="8">
          <Stack gap={3}>
            <CartContent />
          </Stack>
        </Col>
        <Col lg="4"></Col>
      </Row>
    </Container>
  );
}
