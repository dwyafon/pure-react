import React, { useRef, useState } from 'react';
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

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  padding: 0.5rem 1rem;
  color: #fff;
`

const Names = () => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')

  const firstName = useRef()
  const lastName = useRef()

  const handleChange = (e) => {
    e.preventDefault()
    setFirst(firstName.current.value)
    setLast(lastName.current.value)
  }

  return (
    <Wrapper>
      {' '}
      <h1>{`Hello, ${first} ${last}`}</h1>
      <form>
        <label for='first'>First Name</label>
        <input
          type='text'
          name='first'
          id='first'
          ref={firstName}
          placeholder='type here'
        />
        <br/>
        <label for='last'>Last Name</label>
        <input
          type='text'
          name='last'
          id='last'
          ref={lastName}
          placeholder='type here'
        />
        <Button type='submit' onClick={handleChange}>submit</Button>
      </form>
    </Wrapper>
  );
};

ReactDOM.render(<Names />, document.getElementById('root'));
