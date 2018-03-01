import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {

  componentDidMount() {
    console.log('getting user info')
  }

  render() {
    return (
      <div>
        <Link to="/">Go to Homepage</Link>
        User page
        My events
      </div>
    );
  }
}

export default User;
