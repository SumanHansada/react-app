import React, { Component } from 'react';

// For using multiple html elements without div, we use React.Fragment
class Counter extends Component {
  // state objects includes any data that a component needs
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/seed/picsum/450/300'
  };

  // we can set the styles by declaring it as an object
  styles = {
    fontSize: 50,
    fontWeight: 'bold'
  };

  render() {
    // We can write any valid javascript expression inside {}
    // since class is a reserved keyword in javascript, we use className
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt='' />
        <span style={this.styles} className='badge badge-primary m-2'>
          {this.formatCount()}
        </span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
