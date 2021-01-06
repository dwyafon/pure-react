import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const inputRef = useRef();

  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('render');
    inputRef.current.focus();
  }, [inputRef, value]); 
  // if above depenencency array contains only inputRef, because the value of inputRef doesn't change with user 
  // input, useEffect() only runs once -- after the initial render. By adding the `value` variable for state,
  // useEffect() runs each time the state changes -- after every keystroke

  useEffect(() => {
      console.log("mounting");
      return () => console.log("unmounting");
  }, [])

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
