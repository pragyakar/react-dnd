import * as  React from 'react';
import PropTypes from 'prop-types';

class Droppable extends React.Component {

  handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    if (!!data) {
      e.target.appendChild(document.getElementById(data));
      console.log(data + " was moved to " + e.target.id);
    }
    // TODO: handle case where parameter is not a node type
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div 
        id={this.props.id} 
        className='droppable-item'
        onDrop={this.handleDrop} 
        onDragOver={this.allowDrop}
      >
      <div className="section-title">
        {this.props.boxTitle}
      </div>
        {this.props.children}
      </div>
    )
  }
}

Droppable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default Droppable;
