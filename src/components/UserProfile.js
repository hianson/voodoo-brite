import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
      </div>
    );
  }
}

export default UserProfile;
