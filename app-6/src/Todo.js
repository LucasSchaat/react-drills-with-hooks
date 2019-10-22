// import React, {Component} from 'react'

// class Todo extends Component {
//     render() {
//         return(
//             <p>{this.props.task}</p>
//         )
//     }
// }

// export default Todo

import React from 'react'

export default function Todo(props) {
    return (
        <div>
            {props.todo}
        </div>
    )
}