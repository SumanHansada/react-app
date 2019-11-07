import React from 'react';

const ListGroup = props => {
  const { items, textProperty, valueProperty } = props;
  // using the bracket notation to access object value
  return (
    <ul className='list-group'>
      {items.map(item => (
        <li key={item[valueProperty]} className='list-group-item'>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

// For adding default values to the props, incase props not supplied
ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
