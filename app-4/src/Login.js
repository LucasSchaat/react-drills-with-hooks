// import React, {Component} from 'react'

// class Login extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             password: '',
//         }
//         this.handleChangeUsername = this.handleChangeUsername.bind(this)
//         this.handleChangePassword = this.handleChangePassword.bind(this)
//         this.handleLogin = this.handleLogin.bind(this)
//     }
    
//     handleChangeUsername (value) {
//         this.setState({username: value})
//     }

//     handleChangePassword (value) {
//         this.setState({password: value})
//     }

//     handleLogin () {
//         alert(`Username: ${this.state.username} Password: ${this.state.password}`)
//     }

//     render() {
//         return(
//             <div>
//                 <input onChange={e => this.handleChangeUsername(e.target.value)} type='text'/>
//                 <input onChange={e => this.handleChangePassword(e.target.value)} type='text'/>
//                 <button onClick={this.handleLogin}>Login</button>
//             </div>
//         )
//     }
// }

// export default Login

import React, {useState} from 'react'

export default function Login() {
    const [username, updateUsername] = useState([])
    const [password, updatePassword] = useState([])

    return(
        <div>
            <input
                value={username}
                onChange={e => updateUsername(e.target.value)}
                placeholder={'Username'}
            />
            <input
                value={password}
                onChange={e => updatePassword(e.target.value)}
                placeholder={'Password'}
            />
            <button onClick={() => alert(
                `Username: ${username} Password: ${password}`
            )}>
                Login
            </button>
        </div>
    )
}