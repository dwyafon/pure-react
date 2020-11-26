import React from "react";
import ReactDOM from "react-dom";
import navList from "./objects/navlist";
import articles from "./objects/articles";
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import "./index.css";

const App = ({ articles, navList }) => {
  return (
    <div className="container">
      <Nav navList={navList} />
      <ArticleList articles={articles} />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <App articles={articles} navList={navList} />,
  document.getElementById("root")
);
