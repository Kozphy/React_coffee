import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default SearchBar;

function SearchBar() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Enter Product Name"
        aria-label="Enter Product Name"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        <i className="fas fa-search"></i>
      </Button>
    </InputGroup>
  );
}
