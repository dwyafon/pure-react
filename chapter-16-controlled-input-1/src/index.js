import React, { useState } from "react";
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

const InputExample = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
      {" "}
      <input type="text" value={text} onChange={handleChange} placeholder='Type here' />
    </Wrapper>
  );
};

ReactDOM.render(<InputExample />, document.getElementById("root"));
