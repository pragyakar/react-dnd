import * as  React from 'react';

class Droppable extends React.Component {

  drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}>
        {this.props.children}
      </div>
    )
  }
}

export default Droppable;
