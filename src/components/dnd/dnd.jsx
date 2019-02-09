import React from 'react';

import Draggable from './draggable';
import Droppable from './droppable';

class Dnd extends React.Component {

  state = {
    items : [
      {
        id: 'item-one',
        title: 'Item 1', 
        status: 'todo'
      },
      {
        id: 'item-two',
        title: 'Item 2', 
        status: 'todo'
      },
      {
        id: 'item-three',
        title: 'Item 3', 
        status: 'doing'
      }
    ]
  }

  render() {
    return (
      <div className="wrapper">       
        <p className="title">Drag n Drop w/ React</p>
        <div className="container"> 
          <Droppable id="todo" boxTitle="TODO">
            { 
              this.state.items.map((item) => 
                item.status === 'todo' && <Draggable id={item.id} key={item.id}>{item.title}</Draggable>   
              )
            }
          </Droppable>
          <Droppable id="doing" boxTitle="DOING">
            { 
              this.state.items.map((item) => 
                item.status === 'doing' && <Draggable id={item.id} key={item.id}>{item.title}</Draggable>   
              )
            }
          </Droppable>
          <Droppable id="done" boxTitle="DONE">
          { 
            this.state.items.map((item) => 
              item.status === 'done' && <Draggable id={item.id} key={item.id}>{item.title}</Draggable>   
            )
          }
          </Droppable>
        </div>
      </div>
    )
  }
}

export default Dnd;