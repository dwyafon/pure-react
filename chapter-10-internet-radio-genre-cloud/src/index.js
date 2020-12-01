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
      {genres.map((genre, index) => {
        return  index <= 10 ? <GenreButton className='btn btn-large' genre={genre} key={index} /> 
          : index > 10 && index <= 20 ? <GenreButton className='btn btn-medium' genre={genre} key={index} />
          : <GenreButton className='btn btn-small' genre={genre} key={index} /> 
      })}
    </div>
  </div>
);

ReactDOM.render(<App genres={genres} />, document.getElementById("root"));
