import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileList from './FileList'
import testFiles from './testFiles'

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById('root')
);
