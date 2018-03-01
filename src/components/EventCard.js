import React from 'react';

export class EventCard extends React.Component {
  render() {
    return (
      <li style={eventCard}>
        <div style={eventCardContainerStyle}>
          <div style={imgContainer}>
            <img style={{maxWidth: '100%'}} src={this.props.evt.logo.original.url} />
          </div>

          <div style={detailsContainer}>
            <h1 style={{fontSize: '10px'}}>{this.props.evt.name.text}</h1>
          </div>

        </div>
      </li>
    )
  }
}

const eventCard = {
  border: '1px solid blue',
  listStyleType: 'none',
  width: '260px',
  height: '260px',
  display: 'inline-block',
  margin: '10px'
}

const eventCardContainerStyle = {
  border: '1px solid black'
}

const imgContainer = {
  height: '130px',
  overflow: 'hidden'
}

const detailsContainer = {
  border: '1px solid red',
  height: '130px',
  overflow: 'hidden'
}

export default EventCard;
