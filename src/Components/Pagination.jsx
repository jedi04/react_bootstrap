import React from "react";
import Pagination from "react-bootstrap/Pagination";

class MyPagination extends React.Component {
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <div>
        <div>
          <h3>Pagination</h3>
        </div>
        <Pagination>{items}</Pagination>
      </div>
    );
  }
}

export default MyPagination;
