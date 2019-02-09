import React, { Component } from 'react';
import './App.css';

import Dnd from './components/dnd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React DnD</h1>
        <Dnd />
      </div>
    );
  }
}

export default App;
