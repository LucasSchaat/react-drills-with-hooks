import React, { Component } from "react";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: ''
    }

    this.handleChangeTask = this.handleChangeTask.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)

  }
  
  handleChangeTask(value) {
    this.setState({input: value})
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((task, index) => {
      return <Todo key={index} task={task} />
    })

    return (
      <div className="App">
        <h1>My to-do List:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder='Enter new task'
            onChange={e => this.handleChangeTask(e.target.value)}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        {list}
      </div>
    );
  }
}

export default App;
