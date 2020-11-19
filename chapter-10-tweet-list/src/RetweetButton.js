import React from 'react';
import PropTypes from 'prop-types';

function getRetweetCount(count) {
  if (count > 0) {
    return <span className='retweet-count'>{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => {
  return (
    <span className='retweet-button'>
      <i className='fa fa-retweet' />
      {getRetweetCount(count)}
    </span>
  );
};

RetweetButton.propTypes = { count: PropTypes.number };

export default RetweetButton;