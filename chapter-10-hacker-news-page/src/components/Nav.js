import React from 'react'

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

  export default Nav;