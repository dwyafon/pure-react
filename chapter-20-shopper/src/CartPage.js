import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const CartPage = ({ items, onAddOne, onRemoveOne, getTotal }) => {
  if (items.length === 0) {
    return <div className='empty'>Your cart is empty</div>;
  } else {
    return (
      <>
        <ul className='CartPage-items'>
          {items.map((item) => (
            <li key={item.id} className='CartPage-item'>
              <Item item={item}>
                <div className='CartItem-controls'>
                  <button
                    className='CartItem-removeOne'
                    onClick={() => onRemoveOne(item)}
                  >
                    &ndash;
                  </button>
                  <span className='CartItem-count'>{item.count}</span>
                  <button
                    className='CartItem-addOne'
                    onClick={() => onAddOne(item)}
                  >
                    +
                  </button>
                </div>
              </Item>
            </li>
          ))}
        </ul>

        <div className='total'>Total: £{getTotal(items)}</div>
      </>
    );
  }
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;
