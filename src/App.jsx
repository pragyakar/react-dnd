import React, { Component } from 'react';
import './App.css';

import Draggable from './components/draggable';
import Droppable from './components/droppable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React DnD</h1>
        <div className="container">
          <Droppable id="dr1">
            <Draggable id="item1">Some Content</Draggable>
            <Draggable id="item2">Some Content</Draggable>
          </Droppable>
          <Droppable id="dr1">
          </Droppable>
        </div>
      </div>
    );
  }
}

export default App;
