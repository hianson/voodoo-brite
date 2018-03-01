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
        <Link to="/user">Go to User page</Link>
        <SearchBox handleEvents={this.handleEvents}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default Home;
