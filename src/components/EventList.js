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
    <ul style={eventListStyle}>{eventItems}</ul>
  )
}

  render() {
    console.log(this.props)
    return (
      <div style={eventListContainerStyle}>
        {this.renderListItems()}
      </div>
    );
  }
}

const eventListContainerStyle = {
  // border: '1px solid black',
  background: '#f8f8fa',
  margin: 'auto',
  padding: '5%'
  // width: '95%',
}

const eventListStyle = {
  border: '1px solid black',
  padding: '0',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'

}

export default EventList;
