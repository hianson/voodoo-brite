import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  login() {
    let tip = 'access_token='
    let tokenStartIdx = this.props.location.hash.indexOf(tip) + tip.length
    let hashLength = this.props.location.hash.length
    let token = this.props.location.hash.slice(tokenStartIdx, hashLength)

    sessionStorage.setItem('ebToken', token)
    console.log('logged in', sessionStorage)

  }

  render() {
    return (
      <div>
        {this.login()}
        <Redirect to="/user" />
      </div>
    );
  }
}

export default Login;
