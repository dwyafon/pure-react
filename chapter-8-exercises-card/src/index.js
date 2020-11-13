import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { cardInfo } from './App';

ReactDOM.render(<App cardInfo={cardInfo} />, document.getElementById('root'));

