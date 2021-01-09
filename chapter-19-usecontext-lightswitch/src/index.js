import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const RoomContext = createContext();

const RoomStore = ({ children }) => {
  // receive App component as passed in render; children === App

  const [isLit, setLit] = useState(false);

  const toggleLight = () => setLit(!isLit); // return opposite of current value of isLit

  return (
    <RoomContext.Provider value={{ isLit, onToggleLight: toggleLight }}>
      {children}
    </RoomContext.Provider>
  );
};

const Room = () => {
  const { isLit, onToggleLight } = useContext(RoomContext);

  return (
    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      The room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={onToggleLight}>Switch</button>
    </div>
  );
};

const App = () => (
  <div className='app'>
    <Room />
  </div>
);

ReactDOM.render(
  <RoomStore>
    <App />
  </RoomStore>,
  document.querySelector('#root')
); //
