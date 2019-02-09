import * as  React from 'react';
import PropTypes from 'prop-types';

class Droppable extends React.Component {

  drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
    // TODO: use id of parent node to set state of moved item
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div 
        id={this.props.id} 
        className='droppable-item'
        onDrop={this.drop} 
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
