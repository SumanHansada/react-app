import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  // The component that owns the piece of state, should be the one modifying it
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // Handling the delete event
  handleDelete = () => {
    console.log('Event Handler Called');
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
