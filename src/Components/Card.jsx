import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

class MyCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Card</h3>
        </div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/a7/e6/c1/a7e6c189d85bc481fa6a1798801197c3.jpg" />
          <Card.Body>
            <Card.Title>Harry Potter</Card.Title>
            <Card.Text>
	    	Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry
            </Card.Text>
            <Button variant="primary">Reserve</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyCard;
