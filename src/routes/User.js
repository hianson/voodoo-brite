import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('receiving new props:')
    console.log(nextProps)
  }

  componentDidMount() {
    // this.getEventbriteUser()
  }

  async getEventbriteUser() {
    console.log('getting eb user info')
    var key = '3HY2OXUKFERWQFPJOI54'

    const response = await fetch(`https://www.eventbriteapi.com/v3/users/me/?token=${key}`)
    const json = await response.json()
    const data = json
    console.log(data)
  }

  render() {
    return (
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

export default User;
