import React from "react";
import "./App.css";
// import PropTypes from 'prop-types';

const App = () => <ErrorBox>Error: System limit for number of file watchers reached</ErrorBox>;

//generic component
const ErrorBox = ({ children }) => {
  return (
    <div className="container">
      <span className="message">
        <i className="fas fa-exclamation-circle fa-2x" />
        {children}
      </span>
    </div>
  );
};

export default App;
