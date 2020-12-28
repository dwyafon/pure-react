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

const Names = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (e) => { 
    return e.target.name === 'first' ? setFirstName(e.target.value) : setLastName(e.target.value)
  };

  return (
    <Wrapper>
      {" "}
      <h1>{`Hello, ${firstName} ${lastName}`} </h1>
      <input type="text" name='first' onChange={handleChange} placeholder='first name' /> 
      <input type="text" name='last' onChange={handleChange} placeholder='last name' /> 

    </Wrapper>
  );
};

ReactDOM.render(<Names />, document.getElementById("root"));
