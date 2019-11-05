import React, { Component } from 'react';

// For using multiple html elements without div, we use React.Fragment
class Counter extends Component {
  // state objects includes any data that a component needs
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  // we can set the styles by declaring it as an object
  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && 'Please create a new tag'}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  // To conditionally render the tags, we can seperate the logic in seperate method
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
