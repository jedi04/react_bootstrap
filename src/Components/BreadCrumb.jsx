import Breadcrumb from "react-bootstrap/Breadcrumb";
import React from "react";

class MyBreadCrumb extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>BreadCrumb</h3>
        </div>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default MyBreadCrumb;
