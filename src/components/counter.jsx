import React, { Component } from 'react';

// For using multiple html elements without div, we use React.Fragment
class Counter extends Component {
  // state objects includes any data that a component needs
  state = {
    count: 0
  };

  // we can set the styles by declaring it as an object
  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  // Modern Way to bind this (Arrow Functions) - Here this points to Counter class object
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    );
  }
  // we can set classname dynamically
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
