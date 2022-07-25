import React from "react";
import Badge from "react-bootstrap/Badge";

class MyBadge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Badges</h3>
        </div>
        <Badge pill bg="primary">
          Primary
        </Badge>{" "}
        <Badge pill bg="secondary">
          Secondary
        </Badge>{" "}
        <Badge pill bg="success">
          Success
        </Badge>{" "}
      </div>
    );
  }
}

export default MyBadge;
