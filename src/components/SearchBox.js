import React, { Component } from 'react';
import SearchForm from './SearchForm';

class SearchBox extends Component {
  render() {
    return (
      <div style={SearchBoxStyle}>
        <div>Find events for sponsorship</div>
        <SearchForm />
      </div>
    );
  }
}

const SearchBoxStyle = {
  border: '1px solid black',
  width: '80vw',
  textAlign: 'center',
  margin: '60px auto'
}

export default SearchBox;
