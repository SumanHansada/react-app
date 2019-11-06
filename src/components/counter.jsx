import React, { Component } from 'react';

// For using multiple html elements without div, we use React.Fragment
class Counter extends Component {
  // state objects includes any data that a component needs
  // We can copy props to local state and then modify the value
  state = {
    value: this.props.value
  };

  // we can set the styles by declaring it as an object
  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  // Modern Way to bind this (Arrow Functions) - Here this points to counter class object
  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }
  // we can set classname dynamically
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
