import React from 'react';

import Draggable from './draggable';
import Droppable from './droppable';

class Dnd extends React.Component {
  render() {
    return (
      <div className="container">
        <Droppable id="dr1" boxTitle="Section 1">
          <Draggable id="item1">Some Content 1</Draggable>
          <Draggable id="item2">Some Content 2</Draggable>
        </Droppable>
        <Droppable id="dr1" boxTitle="Section 2">
        </Droppable>
      </div>
    )
  }
}

export default Dnd;