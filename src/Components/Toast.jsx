import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

class MyToast extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Toast</h3>
        </div>
        <Button onClick={this.toggleShow} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={this.state.show} onClose={this.toggleShow}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </div>
    );
  }
}

export default MyToast;
