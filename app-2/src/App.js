// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
//     }
//   }
  
//   render() {
//     let foods = this.state.foods.map((item, index) => {
//       return <h2 key={index}>{item}</h2>
//     })
    
//     return (
//       <div className="App">{foods}</div>
//     );
//   }
// }

// export default App;

import React, {useState} from 'react'
import './App.css';

export default function App() {
  const [list, updateList] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'])
  
  return (
    <div className='App'>
      {list.map((element, index) => {
        return <h2 key={`${element}: ${index}`}>{element}</h2>
      })}
    </div>
  )
}
