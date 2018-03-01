import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import EventList from './components/EventList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
        <EventList />
      </div>
    );
  }
}

export default App;
