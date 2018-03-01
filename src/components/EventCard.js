import React from 'react';

export class ListItem extends React.Component {
  render() {
    return (
      <li style={listItem}>
        <div style={listItemContainerStyle}>
          {this.props.evt.name.text}
        </div>
      </li>
    )
  }
}

const listItem = {
  border: '1px solid blue',
  listStyleType: 'none',
  // display: 'inline',
  margin: '10px'
}

const listItemContainerStyle = {
  border: '1px solid black'
}

export default ListItem;
