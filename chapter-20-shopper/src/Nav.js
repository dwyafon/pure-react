import React from 'react';

const Nav = ({ activeTab, onTabChange }) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? 'selected' : ''}`;

  const navList = [
    { name: 'items', id: 1 },
    { name: 'cart', id: 2 },
  ];

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
    {navList.map((tab, idx) => (
      <li key={navList[idx].id} className={itemClass(`${navList[idx].name}`)}>
        <button
          onClick={() => onTabChange(`${navList[idx].name}`)}
        >{`${navList[idx].name}`}</button>
      </li>
    ))}
  </ul>
);

export default Nav;
