import React, { Component } from 'react';
import Navbar from './nav/nav-bar';
import SearchContainer from './search/search-container.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
