import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import articles from "./articles";
import moment from "moment";

const App = ({ articles }) => {
  return (
    <div className="container">
      {/* <Nav /> */}
      <ArticleList />
    </div>
  );
};

// const Nav = () => {
//     return (

//     )
// }

const ArticleList = () => (
  <table className="article-list">
    <tbody>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </tbody>
  </table>
);

const Article = ({ article }) => (
  <>
    <tr className="article-first-row">
      <td>
        <Number number={article.id} />
        <UpvoteIcon />
        <Title title={article.title} />
        <Domain domain={article.domain} />
      </td>
    </tr>
    <tr className="article-second-row">
      <td>
        <Points points={article.points} />
        <Poster poster={article.poster} />
        <Time time={article.uploaded_at} />
        | hide |
        <CommentsOrDiscuss comments={article.comments} />
      </td>
    </tr>
  </>
);

const Number = ({ number }) => <span className="number">{number}. </span>;

const Title = ({ title }) => <span className="title">{title} </span>;

const Domain = ({ domain }) => <span className="domain">({domain})</span>;

const UpvoteIcon = () => <i className="fa fa-caret-up upvote-icon" />;

const Points = ({ points }) => <span className="points">{points} points </span>;

const Poster = ({ poster }) => <span className="poster">by {poster} </span>;

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString} </span>;
};

const CommentsOrDiscuss = ({ comments }) => {
  return comments > 0 ? `${comments} comments` : ` discuss`;
};

ReactDOM.render(<App articles={articles} />, document.getElementById("root"));
