import React from 'react';
import Article from './Article'

const ArticleList = ({ articles }) => (
    <table className="article-list">
      <tbody>
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </tbody>
    </table>
  );

  export default ArticleList;