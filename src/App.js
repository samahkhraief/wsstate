import "./App.css";
import React, { Component } from "react";
import Couter from "./Couter";

export default class App extends Component {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  state = {
    Person: {
      fullName: "Samah Khraief",
      bio: ".....",
      profession: "fullstack developper",
      imgSrc:"https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg",
    },
    show: true,
 
  };


  toggle() {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  }
  render() {
    return (
      <div style={mystyle}>
        <button onClick={() => this.toggle()} style= >toggle</button>
        {this.state.show == true ? (
          <div>
            {this.state.Person.fullName}
            {this.state.Person.bio}
            {this.state.Person.profession}
            <img src={this.state.Person.imgSrc} alt="pic" width={'100px'} />
          </div>
        ) : <Couter/>}
      
      </div>
    );
  }
}
