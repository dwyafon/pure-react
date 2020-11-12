import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App({ toPerson, fromPerson }) {
  return (
    <div className='envelope'>
      <div className='topRow'>
        <FromAddressLabel />
        <Stamp />
      </div>
      <div className='bottomRow'>
        <ToAddressLabel />
      </div>
    </div>
  );
}

function FromAddressLabel() {
  return (
    <div className='label'>
      <div className='toAddress'></div>
      <div className='name'>{fromPerson.name}</div>
      <div className='street'>{fromPerson.street}</div>
      <div className='cityState'>{fromPerson.cityState}</div>
      <div className='postcode'>{fromPerson.code}</div>
    </div>
  );
}

function ToAddressLabel() {
  return (
    <div className='label'>
      <div className='toAddress'></div>
      <div className='name'>{toPerson.name}</div>
      <div className='street'>{toPerson.street}</div>
      <div className='cityState'>{toPerson.cityState}</div>
      <div className='postcode'>{toPerson.code}</div>
    </div>
  );
}

function Stamp() {
  return (
    <div className='Stamp'>
      <i className='fab fa-canadian-maple-leaf fa-5x'></i>
    </div>
  );
}

export const toPerson = {
  name: 'Dale Cooper',
  street: '137 W North Bend Way',
  cityState: 'Twin Peaks, WA',
  code: 98045,
};

export const fromPerson = {
  name: 'Harry Truman',
  street: '123 Blacklodge Road',
  cityState: 'Twin Peaks, WA',
  code: 98045,
};

App.propTypes = {
  toPerson: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    cityState: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
  }),
};

App.propTypes = {
  fromPerson: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    cityState: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
  }),
};

export default App;
