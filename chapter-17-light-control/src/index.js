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
  width: 250px;
  height: 250px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  padding: 0.5rem 0.75rem;
  color: #fff;
`;

const Bulb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Light = () => {
  const [level, dispatch] = useReducer((level, value) => level + value, 0);
  const style =
    level === 0
      ? { color: "#fff" }
      : level === 1
      ? {
          color: "rgba(237, 237, 22, 0.5)",
          border: "1px solid rgba(237, 237, 22, 0.5)",
        }
      : level === 2
      ? {
          color: "rgba(237, 237, 22, 0.75)",
          border: "1px solid rgba(237, 237, 22, 0.75)",
        }
      : {
          color: "rgba(237, 237, 22, 1)",
          border: "1px solid rgba(237, 237, 22, 1",
        };

  return (
    <Wrapper>
      <Bulb>
        <Button onClick={() => (level > 0 ? dispatch(-1) : level)}>-</Button>
        <InnerContainer style={style}>
          {level === 0
            ? `off`
            : level === 1
            ? `low`
            : level === 2
            ? `medium`
            : `high`}
        </InnerContainer>
        <Button onClick={() => (level < 3 ? dispatch(1) : level)}>+</Button>
      </Bulb>
        <Button style={{ marginTop: 18 }} onClick={() => dispatch(-level)}>
          OFF
        </Button>
    
    </Wrapper>
  );
};

ReactDOM.render(<Light />, document.getElementById("root"));
