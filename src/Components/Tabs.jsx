import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class MyTab extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Tabs</h3>
        </div>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home"></Tab>
          <Tab eventKey="profile" title="Profile"></Tab>
          <Tab eventKey="contact" title="Contact" disabled></Tab>
        </Tabs>
      </div>
    );
  }
}

export default MyTab;
