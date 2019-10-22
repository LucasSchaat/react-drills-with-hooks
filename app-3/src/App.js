// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
//       input: ''
//     }
//     this.handleInputFilter = this.handleInputFilter.bind(this)
//   }

//   handleInputFilter (value) {
//     this.setState ({input: value})
//   }

  
//   render() {
//     let filteredArray = this.state.list.filter(item => item.includes(this.state.input))
//     let filteredItem = filteredArray.map((item, index) => {
//       return <h2 key={index}>{item}</h2>
//     })
//     return (
//       <div className="App">
//         <input onChange={e => this.handleInputFilter(e.target.value)} type='text' />
//         <div>{filteredItem}</div>
//       </div>
//     );
//   }
// }

// export default App;

import React, {useState} from 'react'
import './App.css'

export default function App(){
  const [list, changeList] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'])
  const [filteredList, updateList] = useState(list)

  return(
    <div className='App'>
      <input
        // name={input}
        // value={e.target.value}
        onChange={e => updateList(list.filter(element => element.includes(e.target.value)))}
      />
      <div>{filteredList
        // .filter(element => element.includes(input))
        .map((element, index)=> {
          return <h2 key={`${element}: ${index}`}>{element}</h2>
        })
      }</div>
    </div>
  )
}
