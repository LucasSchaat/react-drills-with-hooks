import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  
  render() {
    let foods = this.state.foods.map((item, index) => {
      return <h2 key={index}>{item}</h2>
    })
    
    return (
      <div className="App">{foods}</div>
    );
  }
}

export default App;
