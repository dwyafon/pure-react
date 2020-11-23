import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import articles from './articles';
import moment from 'moment';

const App = ({ articles, navList }) => {
  return (
    <div className='container'>
      <Nav navList={navList} />
      <ArticleList />
      <Footer />
    </div>
  );
};

const Nav = ({ navList }) => {
  return (
    <div className='nav'>
      <ul className='nav-list'>
        {navList.map((li, i) => {
          return li.text === 'Y' ||
            li.text === 'submit' ||
            li.text === 'login' ? (
            <li key={i} id={i}>
              <a href={li.link}>{li.text}</a>
            </li>
          ) : (
            <li key={i} id={i}>
              <a href={li.link}>{li.text} |</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ArticleList = () => (
  <table className='article-list'>
    <tbody>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))} 
    </tbody>
  </table>
);

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

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <a className='moreLink' href='/'>
      More
    </a>
    <hr/>
    <ul className='footer-nav'>
      <li><a href='/'>Guidelines |</a></li>
      <li><a href='/'>FAQ |</a></li>
      <li><a href='/'>Lists |</a></li>
      <li><a href='/'>API |</a></li>
      <li><a href='/'>Security |</a></li>
      <li><a href='/'>Legal |</a></li>
      <li><a href='/'>Apply to YC |</a></li>
      <li><a href='/'>Contact</a></li>
    </ul>
    <form action='/' id='search-form'>
      <label for='search'>Search:</label>
      <input type='search'id='search' name='search'></input>
    </form>
  </div>
  </>
  )
}
// const HackerNewsIcon = () => (
//   <i className='fab fa-accessible-icon' />
// );

const navList = [
  {
    link: '/',
    text: 'Y',
  },
  {
    link: '/',
    text: 'Hacker News',
  },
  {
    link: '/',
    text: 'new',
  },
  {
    link: '/',
    text: 'past',
  },
  {
    link: '/',
    text: 'comments',
  },
  {
    link: '/',
    text: 'ask',
  },
  {
    link: '/',
    text: 'show',
  },
  {
    link: '/',
    text: 'jobs',
  },
  {
    link: '/',
    text: 'submit',
  },
  {
    link: '/',
    text: 'login',
  },
];

ReactDOM.render(
  <App articles={articles} navList={navList} />,
  document.getElementById('root')
);
