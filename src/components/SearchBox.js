import React, { Component } from 'react';
import SearchForm from './SearchForm';

class SearchBox extends Component {
  render() {
    return (
      <div style={SearchBoxStyle}>
        <div>Find events for sponsorship</div>
        <SearchForm getEvents={this.getEvents} handleEvents={this.props.handleEvents}/>
      </div>
    );
  }
}

const SearchBoxStyle = {
  border: '1px solid black',
  width: '80vw',
  textAlign: 'center',
  // margin: '35% auto 0px auto'
  margin: 'auto'
}

export default SearchBox;
