import React from "react";
import HeaderImage from "./HeaderImage";
import Stats from './Stats';

const Header = ({ stats }) => {
  return (
    <>
      <HeaderImage />
      <div className="mainHeading">Heading Here</div>
      <Stats stats={stats} />
    </>
  );
};

export default Header;
