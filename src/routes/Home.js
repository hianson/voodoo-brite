import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import EventList from '../components/EventList';

class Home extends Component {
  constructor() {
    super()

    this.state = {
      events: []
    }
  }


  handleEvents = (events) => {
    this.setState({ events })
  }

  render() {
    return (
      <div>
        <div>
          <a href="https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=LXV32B3TMWHN5A4WAD">Login</a>
        </div>

        <SearchBox handleEvents={this.handleEvents}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default Home;
