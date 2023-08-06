import { createContext, useState } from "react";
import ProductsData from "./ProductsData";

const ProductsContext = createContext();

function Provider(props) {
  const [addToCartBtnClicked, setAddToCartBtnClicked] = useState(false);
  const [counters, setCounters] = useState(Array(ProductsData.length).fill(1));
  return (
    <ProductsContext.Provider value={{
      clickValue: [addToCartBtnClicked, setAddToCartBtnClicked],
      countersValue: [counters, setCounters]
    }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { Provider };
export default ProductsContext;
