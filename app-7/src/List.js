// import React, {Component} from 'react'
// import Todo from './Todo'

// class List extends Component {
//     render() {
//         let list = this.props.updatedList.map((task, index) => {
//             return <Todo key={index} task={task} />
//         })
//         return(
//             <div>{list}</div>
//         )
//     }
// }

// export default List

import React from 'react'
import Todo from './Todo'

const List = (props) => (
    <div>
        {props.list.map((element, index) => {
            return <Todo todo={element} key={`${element}: ${index}`} />
        })}
    </div>
)

export default List