import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App({ cardInfo }) {
  return (
    <div className='card'>
      <BankName />
      <CardNumber />
      <FirstFourNumbers />
      <ExpirationDate />
      <Name />
    </div>
  );
}

const BankName = () => <div className='bank'>{cardInfo.bankName}</div>;
const CardNumber = () => <div className='number'>{cardInfo.cardNumber}</div>;
const FirstFourNumbers = () => <div className='firstFour'>0123</div>;
const ExpirationDate = () => {
  return (
  <div className='expires'>
    <div className='validThru'>VALID<div>THRU</div></div>
  <div className='date'>{cardInfo.expirationDate}</div>
  </div>
  )
};
const Name = () => <div className='name'>{cardInfo.name}</div>;

export const cardInfo = {
  name: 'Harry Truman',
  expirationDate: '01/21',
  cardNumber: '0123 4567 8910 1112',
  bankName: 'Twin Peaks Bank',
};

App.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
  }),
};

export default App;
