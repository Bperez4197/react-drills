import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.login = this.login.bind(this);
    }

    changeUserName(val) {
        this.setState({
            username: val
        })
    }

    changePassword(val) {
        this.setState({
            password: val
        })
    }

    login() {
        let { username, password } = this.state;
        alert(`Username: ${username} Password: ${password}`);

    }


    render() {
        return (
            <div>
                <input onChange={(e) => this.changeUserName(e.target.value)} value={this.state.username} placeholder="Username"></input>
                <input onChange={(e) => this.changePassword(e.target.value)} value={this.state.password} placeholder="Password"></input>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}


