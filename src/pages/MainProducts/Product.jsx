//css
import "../../stylesheet/MainProducts/product-content.css";

import React, { useEffect, useContext } from "react";
import ProductsData from "./ProductsData";

// react
import { useRef, useState } from "react";

// componenet
import ProductCounter from "./productCounter";
import ProductsContext from "./ProdcutsContext";
import AddToCartWithToast from "./Toast";

export default Product;

function Product() {
  // const [btnAddToCart, setBtnAddToCart, counters,setCounters] = useContext(ProductsContext);
  const { clickValue  }  = useContext(ProductsContext);
  console.log(clickValue)
  // console.log(countersValue)
  // const [btnAddToCartClicked, setBtnAddToCartClicked] = useContext(ProductsContext)
  const cardCss = {
    width: "100%",
    position: "static",
  };

  

  const cards = ProductsData.map((el, productInd) => {
    return (
      <div className="col-sm-4" key={el.id}>
        <div className="card" style={cardCss}>
          <img src={el.img.src} className="card-img-top" alt={el.img.alt} />
          <div className="card-body">
            <h5 className="card-title">{el.cardTitle}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <ProductCounter productInd={productInd} />
            <div className="mb-2">
              <span className="romantic-text">{"$ " + el.price}</span>
            </div>

            <AddToCartWithToast
              cardTitle={el.title}
              cardPrice={el.price}
              productInd={productInd}
              // addToCart={addToCart}
            />
          </div>
        </div>
      </div>
    );
  });

  return cards;
}
