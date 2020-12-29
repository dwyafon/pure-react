import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Names = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (e) => {
    return e.target.name === 'first'
      ? setFirstName(e.target.value)
      : setLastName(e.target.value);
  };

  return (
    <Wrapper>
      {' '}
      <h1>{`Hello, ${firstName} ${lastName}`} </h1>
      <form>
        <label for='first'>First Name</label>
        <input
          type='text'
          name='first'
          id='first'
          onChange={handleChange}
          placeholder='type here'
        />
        <br/>
        <label for='last'>Last Name</label>
        <input
          type='text'
          name='last'
          id='last'
          onChange={handleChange}
          placeholder='type here'
        />
      </form>
    </Wrapper>
  );
};

ReactDOM.render(<Names />, document.getElementById('root'));
