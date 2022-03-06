import React, { Component } from 'react'
import { isAuth } from '../../utils/auth'
export default class Login extends Component {
  handleLogin = () =>  {
    // isAuth(1)
    localStorage.setItem('auth',1)
    this.props.history.push('/center')
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.handleLogin}>登录</button>
      </div>
    )
  }
}
