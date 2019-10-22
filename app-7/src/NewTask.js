// import React, {Component} from 'react'

// class NewTask extends Component {
//     constructor (){
//         super()
//         this.state = {
//             input: ''
//         }
//         this.handleChangeTask = this.handleChangeTask.bind(this)
//         this.handleAddTask = this.handleAddTask.bind(this)
        
//     }
    
//     handleChangeTask(value) {
//         this.setState({ input: value })
//     }

//     handleAddTask () {
//         this.props.add(this.state.input)
//         this.setState({ input: '' })
//     }

//     render() {
//         return(
//             <div>
//                 <input
//                 value={this.state.input}
//                 placeholder='Enter new task'
//                 onChange={e => this.handleChangeTask(e.target.value)}
//                 />
//                 <button onClick={this.handleAddTask}>Add</button>
//             </div>
//         )
//     }
// }

// export default NewTask

import React, {useState} from 'react'
import List from './List';

export default function NewTask(props) {
    const [input, updateInput] = useState('')

    return(
        <div>
            <input
                value={input}
                onChange={e => updateInput(e.target.value)}
                placeholder={'Add a to-do item'}
            />
            <button onClick={() => {
                props.updateList([...props.list, input])
                updateInput('')
            }}>Add</button>
        </div>
    )
}