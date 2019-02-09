import React from 'react';

import Draggable from './draggable';
import Droppable from './droppable';

class Dnd extends React.Component {

  render() {
    return (
      <div className="wrapper">       
        <p className="title">Drag n Drop w/ React</p>
        <div className="container"> 
          <Droppable id="dr1" boxTitle="Container 1">
            <Draggable id="item1">Item 1</Draggable>
            <Draggable id="item2">Item 2</Draggable>
          </Droppable>
          <Droppable id="dr2" boxTitle="Container 2">
            <Draggable id="item3">Item 3</Draggable>
          </Droppable>
          <Droppable id="dr3" boxTitle="Container 3"></Droppable>
        </div>
      </div>
    )
  }
}

export default Dnd;