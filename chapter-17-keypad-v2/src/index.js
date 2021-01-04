// Make a “keypad” with 6 buttons that must be pressed in the correct order to unlock it. Each
// correct button press advances the state. An incorrect button should reset it.

import React, { useReducer } from 'react';
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

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 200px;
  grid-gap: 10px;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  padding: 0.5rem 0.75rem;
  color: #fff;
  width: 100px;
  height: 100px;
`;

const Attempt = styled.div`
  margin: 1rem;
  padding: 1rem;
`;

const reducer = (state, value) => {
  const answer = '164532';
  state = state + value;
  if (state.length === 6) {
    return state === answer ? state : ''
  } else {
    return state
  }  
};

const Keypad = () => {
  const [digits, dispatch] = useReducer(reducer, '');

  const handleInput = (e) => {
    if (digits.length < 6) {
      dispatch(e.target.value);
    }
  };

  const style =
    digits === '164532'
      ? { border: '1px solid green', color: 'green' }
      : { border: 'none', color: '#fff' };

  return (
    <Wrapper>
      <InnerContainer>
        <Button value='1' onClick={handleInput}>
          1
        </Button>
        <Button value='2' onClick={handleInput}>
          2
        </Button>
        <Button value='3' onClick={handleInput}>
          3
        </Button>
        <Button value='4' onClick={handleInput}>
          4
        </Button>
        <Button value='5' onClick={handleInput}>
          5
        </Button>
        <Button value='6' onClick={handleInput}>
          6
        </Button>
      </InnerContainer>
      <Attempt style={style}>{digits.length === 0 ? `Please enter the passcode` : digits}</Attempt>
    </Wrapper>
  );
};

ReactDOM.render(<Keypad />, document.getElementById('root'));
