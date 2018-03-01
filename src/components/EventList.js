import React, { Component } from 'react';

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: ['heyyy...', ' eventssss']
    }
  }

  render() {
    return (
      <div style={EventListStyle}>
        {this.state.events}
      </div>
    );
  }
}

const EventListStyle = {
  border: '1px solid black'
}

export default EventList;
