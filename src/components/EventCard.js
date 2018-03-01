import React from 'react';

export class EventCard extends React.Component {
  render() {
    return (
      <li style={eventCard}>
        <div style={eventCardContainerStyle}>
          <div style={imgContainer}>
          {this.props.evt.logo ?
            <img
              style={{maxWidth: '100%'}}
              src={this.props.evt.logo.original.url}
              alt={this.props.evt.name.text}
            /> : null}
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
  // border: '1px solid blue',
  listStyleType: 'none',
  width: '30%',
  margin: '20px auto 20px auto'
}

const eventCardContainerStyle = {
  // border: '1px solid black'
}

const imgContainer = {
  height: '130px',
  overflow: 'hidden'
}

const detailsContainer = {
  // border: '1px solid red',
  height: '130px',
  overflow: 'hidden',
  background: '#ffffff'
}

export default EventCard;
