import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

class User extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      userId: null
    }
  }

  componentDidMount() {
    // this.getEventbriteUser()
  }

  async getEventbriteUser() {

    // here we get eb profile for just a second so we can get their id to
    // create an association in our own backend
    console.log('getEventbriteUser...')
    const key = sessionStorage.getItem('ebToken')
    const response = await fetch(`https://www.eventbriteapi.com/v3/users/me/?token=${key}`)
    const json = await response.json()

    var id = json.id
    var name = json.name
    var state = {
      userId: id,
      name: name
    }

    // after getting eb's user id, check if it exists in db
    // if it exists in db, get their list of events

    // else add id to db

    this.setState(state, ()=>console.log(this.state))
  }

  async getUserEvents() {
    // here i need to hit my own backend which stores their user id associated with
    // the events they want to go to (interested in getting sponsorship for)
    console.log("Hitting our backend with the user's id to get their events...")
    // const id = this.state.user.id
    // const key = sessionStorage.getItem('ebToken')
    // fetch to our express backend?
    // const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/users/${id}/events?token=${key}`)
    // const json = await response.json()
    // const data = json
    // console.log(data)
    // this.setState({ user: data })
  }

  render() {
    return (
      <div>
      {!sessionStorage.getItem('ebToken') ? <Redirect to="/" /> : null}
        <Link to="/logout">Logout</Link>
        <Link to="/">Home</Link>
        {this.state.user ? <UserProfile user={this.state.user}/> : null}
      </div>
    );
  }
}

export default User;
