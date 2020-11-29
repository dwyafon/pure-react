import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import genres from "./genres";
import GenreButton from "./GenreButton";
import Header from "./Header";

const App = ({ genres }) => (
  <div className="container">
    <Header />
    <div className="cloud">
      {" "}
      {genres.map((genre, index) => (
        <GenreButton genre={genre} key={genre.index} />
      ))}
    </div>
  </div>
);

ReactDOM.render(<App genres={genres} />, document.getElementById("root"));
