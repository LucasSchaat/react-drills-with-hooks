// import React, { Component } from "react";
// import "./App.css";
// import NewTask from './NewTask'
// import List from './List'

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       list: [],
//     }
//     this.handleAddTask = this.handleAddTask.bind(this)
//   }

//   handleAddTask(task) {
//     this.setState({
//       list: [...this.state.list, task],
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>My to-do List:</h1>

//         <div>
//           <NewTask add={this.handleAddTask} />
//           <List updatedList={this.state.list} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, {useState} from 'react'
import './App.css'
import NewTask from './NewTask'
import List from './List'

export default function App(){
  const [list, updateList] = useState(['Item #1', 'Item #2'])
  console.log(list)

  return (
    <div className='App'>
      <h3>My To-Do List:</h3>
      <NewTask list={list} updateList={updateList} />
      <List list={list} />
    </div>
  )
}