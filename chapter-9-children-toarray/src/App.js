import React from "react";
import "./App.css";
// import PropTypes from 'prop-types';

const App = () => {
  return (
    <>
      <FirstChildOnly>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </FirstChildOnly>
      <LastChildOnly>
        <li>D</li>
        <li>E</li>
        <li>F</li>
      </LastChildOnly>
      <Head number={2}>
        <li>G</li>
        <li>H</li>
        <li>I</li>
      </Head>
      <Tail number={2}>
        <li>J</li>
        <li>K</li>
        <li>L</li>
      </Tail>
    </>
  );
};

const FirstChildOnly = (props) => {
  const firstChildArr = React.Children.toArray(props.children);
  return <ul>{firstChildArr[0]}</ul>;
};
const LastChildOnly = (props) => {
  const lastChildArr = React.Children.toArray(props.children);
  return <ul>{lastChildArr[2]}</ul>;
};
const Head = (props) => {
  const number = props.number;
  const headArr = React.Children.toArray(props.children);
  const firstTwo = headArr.slice(0, number)
  return <ul>{firstTwo}</ul>;
};
const Tail = (props) => {
  const number = props.number;
  const tailArr = React.Children.toArray(props.children);
  const lastOne = tailArr.slice(number);
  return ( <ul>{lastOne}</ul>
  )
};
export default App;
