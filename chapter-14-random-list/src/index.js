import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';

const Container = styled.div`
  height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
`;

const Button = styled.button`
  background: transparent;
  color: #fff;
  border: solid #fff 1px;
  padding: 1rem;
`;

const UL = styled.ul`
  border: solid #fff 1px;
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  padding: 0.5rem;


`;

function RandomList() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers([
      ...numbers,
      { id: numbers.length, value: Math.floor(Math.random() * 10000000) },
    ]);
  };

  return (
    <Container>
      <Button onClick={addNumber}>Add a Number</Button>
      <UL>
        {numbers.map((number) => (
          <li key={number.id}>{number.value}</li>
        ))}
      </UL>
    </Container>
  );
}

ReactDOM.render(<RandomList />, document.getElementById('root'));
