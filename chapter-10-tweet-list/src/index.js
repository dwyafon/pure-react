import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TweetList from './TweetList';
import tweets from './tweets'

ReactDOM.render(<TweetList tweets={tweets} />, document.querySelector('#root'));
