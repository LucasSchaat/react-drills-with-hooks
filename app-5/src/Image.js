// import React, {Component} from 'react'

// class Image extends Component {
//     render() {
//         return (
//             <img src={this.props.src} alt='Golden State Warriors new logo'/>
//         )
//     }
// }

// export default Image

import React, {useState} from 'react'

Image = (props) => {
    const [url, changeUrl] = useState(props.url)

    return (
        <div>
            <img src={url} alt='GSW new logo'/>
        </div>
    )
}

export default Image