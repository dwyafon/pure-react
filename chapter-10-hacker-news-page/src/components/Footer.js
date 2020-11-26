import React from 'react';

const Footer = () => {
    return (
      <>
        <div className="footer">
          <a className="moreLink" href="/">
            More
          </a>
          <hr />
          <ul className="footer-nav">
            <li>
              <a href="/">Guidelines |</a>
            </li>
            <li>
              <a href="/">FAQ |</a>
            </li>
            <li>
              <a href="/">Lists |</a>
            </li>
            <li>
              <a href="/">API |</a>
            </li>
            <li>
              <a href="/">Security |</a>
            </li>
            <li>
              <a href="/">Legal |</a>
            </li>
            <li>
              <a href="/">Apply to YC |</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <form action="/" id="search-form">
            <label for="search">Search:</label>
            <input type="search" id="search" name="search"></input>
          </form>
        </div>
      </>
    );
  };

  export default Footer;