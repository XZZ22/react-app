import React, { Component } from 'react'
import './index.scss'
import Header from '../../components/header'

class Login extends Component {
    toHome() {
        console.log(this.props)
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="P-login">
                <Header />
                <h1>Login page</h1>
                <button onClick={this.toHome.bind(this)}>跳转Home页</button>
            </div>
        )
    }
}

export default Login
