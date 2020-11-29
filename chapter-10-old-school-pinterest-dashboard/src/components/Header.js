import React from "react";
import HeaderImage from "./HeaderImage";
import Stats from './Stats';

const Header = ({ stats }) => {
  return (
    <div className='header'>
      <HeaderImage />
      <h1 className="mainHeading">Denmark Explorer</h1>
      <Stats stats={stats} />
    </div>
  );
};

export default Header;
