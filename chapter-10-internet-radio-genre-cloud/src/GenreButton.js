import React from "react";
// import PropTypes from 'prop-types';

const GenreButton = ({ genre, className }) => {
  return (
    <button className={className}>{genre}</button>
  )
}

export default GenreButton;
