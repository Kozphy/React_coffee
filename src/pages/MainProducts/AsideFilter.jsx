import React from "react";
import { useState } from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default AsideFilter;

function ProductFilter() {
  const [filterState, setFilterState] = useState(false);
  const filterData = [
    {
      id: 0,
      labelContent: "精品咖啡",
    },
    {
      id: 1,
      labelContent: "咖啡豆",
    },
    {
      id: 2,
      labelContent: "水洗",
    },
    {
      id: 3,
      labelContent: "日曬",
    },
  ];

  function handleCheckBox() {
    return setFilterState(!filterData);
  }

  let filters = filterData.map((el) => {
    return (
      <div className="form-check" key={el.id}>
        <input
          className="form-check-input"
          type="checkbox"
          value={filterState}
          onChange={handleCheckBox}
          id={el.id}
        />
        <label className="form-check-label" htmlFor={el.id}>
          {el.labelContent}
        </label>
      </div>
    );
  });

  return filters;
}


function AsideFilter() {
  return (
    <aside className="products-filter col-sm-3">
      <ProductFilter />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="起始價格"
          aria-label="起始價格"
        />
        <div className="d-flex justify-content-center align-items-center px-2">
          <span>
          ~
          </span>
        </div>
        <Form.Control
          placeholder="結束價格"
          aria-label="結束價格"
        />
      </InputGroup>
      <div className="d-flex justify-content-center">
        <Button variant="primary">篩選</Button>
      </div>
    </aside>
  );
}
