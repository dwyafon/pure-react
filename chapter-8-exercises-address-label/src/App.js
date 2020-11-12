import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App({ person }) {
  return (
    <div className='container'>
      <div className='label'>
        <div className='name'>{person.name}</div>
        <div className='street'>{person.street}</div>
        <div className='cityState'>{person.cityState}</div>
        <div className='postcode'>{person.code}</div>
      </div>
    </div>
  );
}

export const person = {
  name: 'Dale Cooper',
  street: '137 W North Bend Way',
  cityState: 'Twin Peaks, WA',
  code: 98045
};

App.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    cityState: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired
  })
}

export default App;
