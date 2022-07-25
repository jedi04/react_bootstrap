import React from "react";
import Button from "react-bootstrap/Button";

class MyButton extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Button Components</h3>
        </div>
        <Button variant="primary">Submit</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Cancel</Button>{" "}
        <Button variant="info">Info</Button>{" "}
      </div>
    );
  }
}

export default MyButton;
