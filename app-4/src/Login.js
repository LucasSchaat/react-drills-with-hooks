import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    
    handleChangeUsername (value) {
        this.setState({username: value})
    }

    handleChangePassword (value) {
        this.setState({password: value})
    }

    handleLogin () {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return(
            <div>
                <input onChange={e => this.handleChangeUsername(e.target.value)} type='text'/>
                <input onChange={e => this.handleChangePassword(e.target.value)} type='text'/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login