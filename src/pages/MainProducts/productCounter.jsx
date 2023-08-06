import { useState, useContext } from "react";

// component
import ProductsContext from "./ProdcutsContext";

export default ProductCounter;

function ProductCounter({productInd}) {


  const { clickValue, countersValue  }  = useContext(ProductsContext);
  const [addToCartBtnClicked, setAddToCartBtnClicked] = clickValue;
  const [counters, setCounters] = countersValue;


  function reduce() {
    const nextCounters = counters.slice();
    if (nextCounters[productInd] > 1) {
      nextCounters[productInd]--;
      setCounters(nextCounters);
      // setInputValue((value) => (value -= 1));
    }
  }

  function add() {
    // console.log(counters)
    const nextCounters = counters.slice();
    nextCounters[productInd]++;
    setCounters(nextCounters);
    // setInputValue((value) => (value += 1));
  }

  function resetCounter() {
    setCounters(counters[productInd] = 0);
    // setInputValue(1);
  }



  return (
    <div className="input-group mb-3">
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={reduce}
      >
        <span>-</span>
      </button>
      <input
        type="text"
        className="form-control text-center"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        value={counters[productInd]}
        onChange={(e) => setCounters(counters[productInd] = e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          add();
        }}
      >
        <span> + </span>
      </button>
    </div>
  );
}
