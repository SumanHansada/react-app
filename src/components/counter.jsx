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
    // this.props.value = 0; // This cannot be done
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // Every react component has a property called props.
    // It includes all the attributes which we set in counters component
    // i.e. we can pass data to components using props
    // We can also pass the children in props
    console.log('props', this.props);

    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className='btn btn-secondary btn-sm'
        >
          Increment
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
