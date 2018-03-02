import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  logout() {
    sessionStorage.removeItem('ebToken')
    console.log('logged out: ', sessionStorage)
  }

  render() {
    return (
      <div>
        {this.logout()}
        <Redirect to="/" />
      </div>
    );
  }
}

export default Logout;
