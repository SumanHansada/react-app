import React, { Component } from 'react';

// For using multiple html elements without div, we use React.Fragment
class Counter extends Component {
  // Removed the local state for single source of truth
  // we can set the styles by declaring it as an object
  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  // This method is called after the component is updated
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get new data from server
    }
  }

  render() {
    console.log('Counter - Rendered');
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
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
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
