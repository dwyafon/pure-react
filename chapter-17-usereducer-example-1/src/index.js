import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  padding: 1rem 2rem;
  color: #fff;
`;

const Counter = () => {
  const [count, dispatcher] = useReducer((state, action) => state + action, 0); //custom name for reducer function

  return (
    <Wrapper>
    <h1>Counter</h1>
    <div className="count">{count}</div>
      <Button onClick={() => dispatcher(1)}>
        +
      </Button>
    </Wrapper>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
