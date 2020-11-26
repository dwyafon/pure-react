import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// import PropTypes from 'prop-types';

import stats from './objects/stats';
import cards from './objects/cards';
import Header from "./components/Header";
import Card from "./components/Card";


const App = ({ stats, cards }) => {
  return (
    <div className="container">
      <Header stats={stats} />
      <Card cards={cards}/>
    </div>
  );
};

ReactDOM.render(<App stats={stats} cards={cards} />, document.getElementById("root"));
