import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput(value) {
    this.setState({input: value})
  }

  
  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChangeInput(e.target.value)} type='text' />
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
