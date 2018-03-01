import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      keywords: '',
      location: '',
      date: '0'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var textField = event.target.name
    var state = {};

    state[textField] = event.target.value
    this.setState(state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getEventbriteEvents();
  }

  getEventbriteEvents() {
    console.log(`searching eb events with: ${this.state.keywords}, ${this.state.location}, ${this.state.date}`)
  }


  render() {
    return (
      <div style={SearchFormStyle}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="keywords" onChange={this.handleChange} value={this.state.keywords} placeholder="Search events or categories" />
          <input type="text" name="location" onChange={this.handleChange} value={this.state.location} placeholder="City or location"/>
          <select value={this.state.date} name="date" onChange={this.handleChange}>
            <option value="0">All Dates</option>
            <option value="1">Today</option>
            <option value="2">Tomorrow</option>
            <option value="3">This Week</option>
            <option value="4">This Weekend</option>
            <option value="5">Next Week</option>
            <option value="6">Next Month</option>
          </select>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

const SearchFormStyle = {
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center'
}

export default SearchForm;
