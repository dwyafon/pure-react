import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = () => <Dialog />;

const Dialog = () => {
  return (
    <div className='container'>
      <Title>Heads Up!</Title>
      <Line />
      <Body>
        Click the button below only if you are ready for what happens next.
      </Body>
      <Line />
      <Footer>Let's Do This</Footer>
    </div>
  );
};

const Title = (props) => <div className='title'>{props.children}</div>;

const Body = (props) => <div className='body'>{props.children}</div>;

const Footer = (props) => (
  <div className='footer'>
    <button>{props.children}</button>
  </div>
);

const Line = () => (
  <span>
    <hr />
  </span>
);

Dialog.propTypes = {
  children: PropTypes.element,
};

export default App;
