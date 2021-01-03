import React, { useReducer, useRef } from "react";
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
  padding: 0.25rem 0.5rem;
  color: #fff;
  margin-left: 0.5rem;
`;

const reducer = (state, value) => {
  switch (value.type) {
    case "add":
      return [...state, { id: state.length, name: value.name }];
    case "remove":
      return state.filter((_, index) => index !== value.index);
    case "clear":
      return state.filter(e => !e);
    default:
      return state;
  }
};

const ShoppingList = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  };

  return (
    <Wrapper>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef}></input>
      </form>
      <Button onClick={() => dispatch({ type: "clear" })}>Clear All</Button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            {item.name !== '' ? (<Button onClick={() => dispatch({ type: "remove", index })}>x</Button>) : ('') }
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
