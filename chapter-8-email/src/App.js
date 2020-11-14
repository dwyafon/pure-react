import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App({ email }) {
  const { sender, subject, date, message } = email;
  return (
    <div className='email'>
      <TopRow sender={sender} subject={subject} date={date} />
      <MiddleRow />
      <BottomRow message={message} />
    </div>
  );
}

const TopRow = ({ sender, subject, date }) => {
  return (
    <div className='top'>
      <span className='sender'>{sender}</span>
      <span className='subject'>{subject}</span>
      <span className='date'>{date}</span>
    </div>
  );
};

const MiddleRow = () => {
  return (
    <div className='middle'>
      <span className='box'>
        <i className='far fa-square'></i>
      </span>
      <span className='star'>
        <i className='far fa-star'></i>
      </span>
    </div>
  );
};

const BottomRow = ({ message }) => <div className='message'>{message}</div>;

export const email = {
  sender: 'Diane',
  subject: 'The Black Lodge',
  date: 'Mar 1989',
  message: 'Do not go into the Black Lodge, Agent Cooper.',
};

App.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }),
};

export default App;
