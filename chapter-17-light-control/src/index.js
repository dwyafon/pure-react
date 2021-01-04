import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  padding: 0.5rem .75rem;
  color: #fff;
  margin-left: 0.5rem;
`;

const Light = () => {
  const [level, dispatch] = useReducer((level, value) => level + value, 0)

  return (
    <Wrapper>
    <Button onClick={ () => (level < 3 ? dispatch(1) : level) } >+</Button>
    <InnerContainer>
      {level === 0 ? `Off` :  level === 1 ? `Low` : level === 2 ? `Medium` : `High`}
    </InnerContainer>
    <Button onClick={ () => (level > 0 ? dispatch(-1) : level) }>-</Button>
    <Button style={{marginTop: 18}} onClick={ () => dispatch(-level) }>OFF</Button>
  </Wrapper>
  )
}


ReactDOM.render(<Light />, document.getElementById("root"));
