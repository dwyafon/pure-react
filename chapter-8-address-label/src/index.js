import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { person } from './App';

ReactDOM.render(<App person={person} />, document.getElementById('root'));

