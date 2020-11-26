import React from 'react';
import moment from 'moment';

const Article = ({ article }) => (
  <>
    <tr className='article-first-row'>
      <td>
        <Number number={article.id} />
        <UpvoteIcon />
        <Title title={article.title} />
        <Domain domain={article.domain} />
      </td>
    </tr>
    <tr className='article-second-row'>
      <td>
        <Points points={article.points} />
        <Poster poster={article.poster} />
        <Time time={article.uploaded_at} />
        <span className='hide'>
          <a href='/'>| hide | </a>
        </span>
        <span className='comments'>
          <a href='/'>
            <CommentsOrDiscuss comments={article.comments} />
          </a>
        </span>
      </td>
    </tr>
  </>
);

const Number = ({ number }) => <span className='number'>{number}. </span>;

const Title = ({ title }) => (
  <span className='title'>
    <a href='/'>{title}</a>{' '}
  </span>
);

const Domain = ({ domain }) => (
  <span className='domain'>
    <a href='/'>({domain})</a>
  </span>
);

const UpvoteIcon = () => (
  <a href='/'>
    <i className='fa fa-caret-up upvote-icon' />
  </a>
);

const Points = ({ points }) => <span className='points'>{points} points </span>;

const Poster = ({ poster }) => (
  <span className='poster'>
    by<a href='/'> {poster} </a>
  </span>
);

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className='time'>
      <a href='/'>{timeString} </a>
    </span>
  );
};

const CommentsOrDiscuss = ({ comments }) => {
  return comments > 0 ? `${comments} comments` : ` discuss`;
};

export default Article;
