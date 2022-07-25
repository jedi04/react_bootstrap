import React from "react";
import Alert from "react-bootstrap/Alert";

class MyAlert extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Alerts</h3>
        </div>
        <Alert variant="primary">Registered Sucessfully!!.</Alert>
        <Alert variant="danger">Verification Failed</Alert>
      </div>
    );
  }
}

export default MyAlert;
