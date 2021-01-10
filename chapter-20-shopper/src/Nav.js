import React from 'react';
import {navList} from './navlist'

const Nav = ({ activeTab, onTabChange }) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? 'selected' : ''}`;

  return (
    <nav className='App-nav'>
      <NavItems
        navList={navList}
        itemClass={itemClass}
        onTabChange={onTabChange}
      />
    </nav>
  );
};

const NavItems = ({ navList, itemClass, onTabChange }) => (
  <ul>
    {navList.map((tab) => (
      <li key={tab.id} className={itemClass(`${tab.name}`)}>
        <button
          onClick={() => onTabChange(`${tab.name}`)}
        >{`${tab.name}`}</button>
      </li>
    ))}
  </ul>
);

export default Nav;
