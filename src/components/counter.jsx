import React, { Component } from 'react';

// For using multiple html elements without div, we use React.Fragment
class Counter extends Component {
  // state objects includes any data that a component needs
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/seed/picsum/450/300',
    tags: ['tag1', 'tag2', 'tag3']
  };

  // we can set the styles by declaring it as an object
  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  render() {
    // We can write any valid javascript expression inside {}
    // since class is a reserved keyword in javascript, we use className
    // We can use map operator to render the list
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt='' />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  // we can set classname dynamically
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
