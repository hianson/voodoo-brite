import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      keywords: '',
      location: '',
      date: '',
      events: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var textField = event.target.name, state = {};

    state[textField] = event.target.value
    this.setState(state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getEventbriteEvents();
  }

  async getEventbriteEvents() {
    console.log(`searching eb events with: ${this.state.keywords}, ${this.state.location}, ${this.state.date}`)

    var key = process.env.REACT_APP_EVENTBRITE_KEY

    const response = await fetch(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&q=${this.state.keywords}&location.address=${this.state.location}&start_date.keyword=${this.state.date}`)
    const json = await response.json()
    const data = json.events
    this.setState({ events: data })
    this.props.handleEvents(this.state.events)
  }


  render() {
    return (
      <div style={SearchFormStyle}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="keywords" onChange={this.handleChange} value={this.state.keywords} placeholder="Search events or categories" />
          <input type="text" name="location" onChange={this.handleChange} value={this.state.location} placeholder="City or location"/>
          <select value={this.state.date} name="date" onChange={this.handleChange}>
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this_week">This Week</option>
            <option value="this_weekend">This Weekend</option>
            <option value="next_week">Next Week</option>
            <option value="next_month">Next Month</option>
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
