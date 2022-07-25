import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

class MyPopOver extends React.Component {
  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Body>
      </Popover>
    );

    return (
      <div>
        <div>
          <h3>PopOver</h3>
        </div>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default MyPopOver;
