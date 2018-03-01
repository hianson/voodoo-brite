import React, { Component } from 'react';
import EventCard from './EventCard';

class EventList extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  renderListItems() {
  const eventItems = this.props.events.map((evt) => {
    return(
      <EventCard
        key={evt.id}
        evt={evt}
      />
    )
  })
  return(
    <ul>{eventItems}</ul>
  )
}

  render() {
    console.log(this.props)
    return (
      <div style={EventListStyle}>
        {this.renderListItems()}
      </div>
    );
  }
}

const EventListStyle = {
  border: '1px solid black'
}

export default EventList;
