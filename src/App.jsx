import React, { Component } from "react";
// To create a component class, Component is imported from React
// Bootstrap Button and List Group are used.
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Kelly White",
        bio: "Kelly White is a lively person who enjoys making people happy.",
        imgSrc:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        profession: "Entertainer",
      },
      shows: false,
      timeInterval: 0,
    };
  }
  //The componentDidMount() helps us to keep tabs with last time the component was mounted.
  componentDidMount() {
    setInterval(() => {
      this.setState({
        timeInterval: this.state.timeInterval + 1,
      });
    }, 1000); //1000 converts the time from miliseconds to seconds.
  }
  //function for changing state.
  toggleShows = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };
  //The design of our card goes in here!
  RenderCard() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{fullName}</Card.Title>
          <Card.Text>{bio}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Profession: {profession}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
  //A class component must have a render() method.
  render() {
    return (
      <div className="d-flex flex-column gap-4 align-items-center">
        {/* When shows is true, the card is rendered. */}
        {this.state.shows && this.RenderCard()}
        {/* Run toggleShows() when the button is clicked. */}
        <Button onClick={this.toggleShows} className="w-25">
          {/* This tenary operator helps to carry out the button toggling. */}
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </Button>
        <h1>This component was mounted {this.state.timeInterval}s ago</h1>
      </div>
    );
  }
}

export default App;
