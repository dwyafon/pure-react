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

  // within handleChange validation and formatting can be achieved
  const handleChange = (e) => { 
    let text = e.target.value; 
    setText(text.replace(/[A-Z]/g, '')
    );
  };

  return (
    <Wrapper>
      {" "}
      {/* value={text} prop determines what is displayed */}
      <input type="text" value={text} onChange={handleChange} placeholder='Type here -- lowercase letters only, please' /> 
    </Wrapper>
  );
};

ReactDOM.render(<InputExample />, document.getElementById("root"));
