import React from "react";
import { navList } from "./navlist";

const Nav = ({ activeTab, onTabChange, cart, getTotal }) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`;

  return (
    <nav className="App-nav">
      <NavItems
        navList={navList}
        itemClass={itemClass}
        onTabChange={onTabChange}
      />
      <CartSummary onTabChange={onTabChange} items={cart} getTotal={getTotal}/>
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

const CartSummary = ( { getTotal, items, onTabChange}) => {
  const totalCount = items.reduce((total, item) => total + item.count, 0)
  return (
  <span className="cartSummary">
    <button onClick={() => onTabChange('Cart')}>
      {" "}
      <i className="fas fa-shopping-cart" /> {totalCount} items (£{getTotal(items)})
    </button>
  </span>
  )
}

export default Nav;
