import React, { Component } from 'react';
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
        <SearchBox handleEvents={this.handleEvents}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default Home;
