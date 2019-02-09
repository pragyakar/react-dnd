import * as  React from 'react';
import PropTypes from 'prop-types';

class Draggable extends React.Component {

  handleDrag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
  }

  preventDrop = (e) => {
    e.stopPropagation();
  }

  render() {
    return (
      <React.Fragment>
      <div 
        id={this.props.id} 
        className='draggable-item'
        draggable='true' 
        onDragStart={this.handleDrag} 
        onDragOver={this.preventDrop}
      > 
        <div className="item">
          {this.props.children}
        </div>
      </div>
      </React.Fragment>
    )
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default Draggable;
 