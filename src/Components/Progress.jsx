import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class MyProgressBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Progress Bar</h3>
        </div>
        <ProgressBar animated now={45} />
      </div>
    );
  }
}

export default MyProgressBar;
