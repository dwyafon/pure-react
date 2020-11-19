import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => (
  <div className='container'>
    {' '}
    <>
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </>
  </div>
);

TweetList.propTypes = {
  tweets: PropTypes.array,
};

export default TweetList;
