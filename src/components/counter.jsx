import React, { Component } from 'react';

// For using multiple html elements without div, we use React.Fragment
class Counter extends Component {
  // Removed the local state for single source of truth
  // we can set the styles by declaring it as an object
  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  // This method is called after the component is updated
  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get new data from server
    }
  }

  // This method is called just before a component is removed from DOM
  // Here we can also do all kinds of clean-up like timers or listeners.
  // We can clean those up before this component is removed from DOM
  // Otherwise we will end up with memory leaks
  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');
    const { counter, onIncrement, onDelete, onDecrement } = this.props;
    return (
      <div className='row'>
        <div className='col-1'>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className='col'>
          <button
            onClick={() => onIncrement(counter)}
            className='btn btn-secondary btn-sm'
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className='btn btn-secondary btn-sm m-2'
            disabled={counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className='btn btn-danger btn-sm'
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  // we can set classname dynamically
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
