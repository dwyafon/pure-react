import React from "react";
import HeaderImage from "./HeaderImage";
import Stats from './Stats';

const Header = ({ stats }) => {
  return (
    <>
      <HeaderImage />
      <span className="mainHeading">Heading Here</span>
      <Stats stats={stats} />
    </>
  );
};

export default Header;
