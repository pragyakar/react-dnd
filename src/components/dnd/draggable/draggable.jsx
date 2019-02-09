import * as  React from 'react';
import PropTypes from 'prop-types';

class Draggable extends React.Component {

  drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
  }

  dontAllowDrop = (e) => {
    e.stopPropagation();
  }

   render() {
    return (
      <div 
        id={this.props.id} 
        className='draggable-item'
        draggable='true' 
        onDragStart={this.drag} 
        onDragOver={this.dontAllowDrop}
      >
        <div className="item">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default Draggable;
 