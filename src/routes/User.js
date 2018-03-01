import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go to Homepage</Link>asdasdasd
        <a href="https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=LXV32B3TMWHN5A4WAD">authorize app with Eventbrite</a>
        User page
        My events
      </div>
    );
  }
}

export default User;
