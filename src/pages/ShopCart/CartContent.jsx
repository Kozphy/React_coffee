import Card from "react-bootstrap/Card";
import ProductsData from "../MainProducts/ProductsData";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default CartContent;

function CartContent() {
  const cardImgCss = {
    height: "200px",
    // objectFit: "contain",
    // width:"300px"
  };

  const cardCss = {
    flexDirection: "row",
  };
  const cardBodyCss = {
    display: "inline-block",
    padding: 0,
  };

  const content = ProductsData.map((product) => {
    return (
      <Card style={cardCss}>
        <Card.Body style={cardBodyCss}>
          <Container>
            <Row>
              <Col lg={3} className="px-0">
                <Card.Img
                  src={product.img.src}
                  className="img-fluid"
                  style={cardImgCss}
                />
              </Col>
              <Col lg={9} className="d-flex align-items-center ">
                <Row className="h-100 w-100 mx-0">
                  <Col lg={6} className="my-auto text-center">
                    <Card.Title className="mb-0" style={cardBodyCss}>
                      {product.title}
                    </Card.Title>
                  </Col>
                  <Col lg={5} className="my-auto text-center">
                    <InputGroup>
                      <Button variant="outline-secondary" id="button-addon1">
                        -
                      </Button>
                      <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        +
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col lg={1} className="my-auto text-center">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  });
  return content;
}
