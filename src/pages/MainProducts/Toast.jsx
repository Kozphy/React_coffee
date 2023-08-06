import React, { useState, useContext } from "react";
import ProductsContext from "./ProdcutsContext";

// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

export default AddToCartWithToast;

function AddToCartWithToast({ cardTitle, cardPrice , productInd}) {
 const [showToast, setShowToast] = useState(false);
  const { clickValue, countersValue  }  = useContext(ProductsContext);
  const [addToCartBtnClicked, setAddToCartBtnClicked] = clickValue;
  const [counters, setCounters] = countersValue;

  function toggleToast() {
    setShowToast(!showToast);
  }

  if (showToast) {
    setTimeout(toggleToast, 2000);
  }
  let currentTime = new Date().toLocaleString();

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          toggleToast();
          setAddToCartBtnClicked(true);
        }}
      >
        加入購物車
      </button>
      <Toast show={showToast} className="toast">
        <Toast.Header className="toastHeader" closeButton={false}>
          <strong className="me-auto">{cardTitle} 已加入購物車</strong>
          <small> {currentTime}</small>
        </Toast.Header>
        <Toast.Body>金額:{counters[productInd] * cardPrice}</Toast.Body>
      </Toast>
    </>
  );
}
