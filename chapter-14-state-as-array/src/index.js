import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function RandomList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
// setItems() is called passing an array that first spreads the items array and then adds a new item to the items array -- an(other) object with two properties
// Here, items.length is initially zero when the value for the id key is assigned
    setItems([...items, { id: items.length, value: Math.random() * 100 }]);
  };

  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<RandomList />, document.getElementById('root'));
