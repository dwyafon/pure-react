import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { email } from './App';

ReactDOM.render(<App email={email} />, document.getElementById('root'));

