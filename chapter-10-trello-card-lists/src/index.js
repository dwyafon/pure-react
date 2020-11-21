import React from "react";
import ReactDOM from "react-dom";
import './index.css';

// import PropTypes from 'prop-types';
import lists from "./lists";
import List from "./List";

const CardList = ({ lists }) => {
  return (
    <div className="container">
      {" "}
      <>
        {lists.map((list) => (
          <List list={list} key={list.id} />
        ))}
      </>
    </div>
  );
};

ReactDOM.render(<CardList lists={lists} />, document.getElementById("root"));
