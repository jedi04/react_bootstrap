import React from "react";
import Spinner from "react-bootstrap/Spinner";

class MySpinner extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Spinner</h3>
        </div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
}

export default MySpinner;
