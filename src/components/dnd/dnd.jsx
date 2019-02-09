import React from 'react';

import Draggable from './draggable';
import Droppable from './droppable';

class Dnd extends React.Component {

  render() {
    return (
      <div className="wrapper">       
        <p className="title">Drag n Drop w/ React</p>
        <div className="container"> 
          <Droppable id="container-one" boxTitle="Container 1">
            <Draggable id="item-one">Item 1</Draggable>
            <Draggable id="item-two">Item 2</Draggable>
          </Droppable>
          <Droppable id="container-two" boxTitle="Container 2">
            <Draggable id="item-three">Item 3</Draggable>
          </Droppable>
          <Droppable id="container-three" boxTitle="Container 3"></Droppable>
        </div>
      </div>
    )
  }
}

export default Dnd;