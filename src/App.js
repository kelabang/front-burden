import React, { Component } from 'react';
import './App.css';

import SectionComponent from './components/SectionComponent';
import NavComponent from './components/NavComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <SectionComponent />
      </div>
    );
  }
}

export default App;
