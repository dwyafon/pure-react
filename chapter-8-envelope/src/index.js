import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { toPerson, fromPerson } from './App';

ReactDOM.render(<App toPerson={toPerson} fromPerson={fromPerson} />, document.getElementById('root'));

