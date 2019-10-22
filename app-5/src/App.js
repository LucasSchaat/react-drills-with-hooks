import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image src='https://usatftw.files.wordpress.com/2019/06/logos.jpg?w=1000' />
      </div>
    );
  }
}

export default App;
