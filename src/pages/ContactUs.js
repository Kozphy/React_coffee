import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default TrafficInfo;

function GenderSelect() {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>性別*</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="1">男</option>
        <option value="2">女</option>
      </Form.Select>
    </Form.Group>
  );
}

function FormFloatingBasicExample() {
  return (
    <>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>檔案選擇</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <FloatingLabel
        className="mb-3"
        controlId="floatingTextarea2"
        label="Comments"
        style={{ height: "70%" }}
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100%" }}
        />
      </FloatingLabel>
    </>
  );
}

function ContractUsForm() {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>姓名*</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" required />
      </Form.Group>

      <GenderSelect />

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>電話*</Form.Label>
        <Form.Control type="text" placeholder="Enter Your phone" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>信箱 Email address*</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>地址*</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Address" required />
      </Form.Group>
    </>
  );
}

function TrafficInfo() {
  return (
    <Container>
      <iframe
        title="google-map"
        className="w-100 footer-img"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7494.55885267168!2d120.64655111572229!3d24.150620133845838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9650422ae1%3A0x334dfd5796c49ff6!2z6LOH5bGV5ZyL6ZqbLeWOnyDos4fnrZbmnIMt5pW45L2N5pWZ6IKy56CU56m25omALeS4reWNgA!5e0!3m2!1sen!2stw!4v1681434328690!5m2!1sen!2stw"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Form>
        <Row>
          <Col md={6}>
            <ContractUsForm />
          </Col>
          <Col md={6}>
            <FormFloatingBasicExample />
            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
