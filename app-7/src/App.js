import React, { Component } from "react";
import "./App.css";
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task) {
    this.setState({
      list: [...this.state.list, task],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do List:</h1>

        <div>
          <NewTask add={this.handleAddTask} />
          <List updatedList={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
