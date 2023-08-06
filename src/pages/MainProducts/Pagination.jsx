import React from "react";
import Pagination from "react-bootstrap/Pagination";
export default PaginationExample;

function PaginationItem() {
  const paginationData = [1, 2, 3, 4, 5, 6];

  const pages = paginationData.map((el) => {
    return <Pagination.Item key={el}>{el}</Pagination.Item>;
  });

  return pages;
}

function PaginationExample() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <PaginationItem />

      <Pagination.Ellipsis />

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}
