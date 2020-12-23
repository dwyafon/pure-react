import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import './index.css';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 0.5px solid;
  color: #FFFACD;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  margin: 1rem;
  font-size: 1.1rem;
  width: 5rem;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`

function AudioControls() {
  const [volume, setVolume] = useState(1);
  const [treble, setTreble] = useState(1);
  const [bass, setBass] = useState(1);
  const [mid, setMid] = useState(1);

  return (
    <Container>
      <InnerContainer>
      <DecreaseVolume volume={volume} setVolume={setVolume}></DecreaseVolume>
      <TextContainer>
        {" "}
        <Volume volume={volume} />{" "}
      </TextContainer>
      <IncreaseVolume volume={volume} setVolume={setVolume}></IncreaseVolume>
      </InnerContainer>
      
      <InnerContainer>
      <DecreaseTreble treble={treble} setTreble={setTreble}></DecreaseTreble>
      <TextContainer>
        {" "}
        <Treble treble={treble} />{" "}
      </TextContainer>
      <IncreaseTreble treble={treble} setTreble={setTreble}></IncreaseTreble>
      </InnerContainer>

      <InnerContainer>
      <DecreaseMid mid={bass} setMid={setMid}></DecreaseMid>
      <TextContainer>
        {" "}
        <Mid mid={mid} />{" "}
      </TextContainer>
      <IncreaseMid mid={mid} setMid={setMid}></IncreaseMid>
      </InnerContainer>


      <InnerContainer>
      <DecreaseBass bass={bass} setBass={setBass}></DecreaseBass>
      <TextContainer>
        {" "}
        <Bass bass={bass} />{" "}
      </TextContainer>
      <IncreaseBass bass={bass} setBass={setBass}></IncreaseBass>
      </InnerContainer>


    </Container>
  );
}

const IncreaseVolume = ({ volume, setVolume }) => (
  <Button onClick={() => volume < 100 ? setVolume((notch) => notch + 1) : volume}>+</Button>
);

const DecreaseVolume = ({ volume, setVolume }) => (
  <Button onClick={() => volume > 1 ? setVolume((notch) => notch - 1) : volume}>-</Button>
);

const IncreaseTreble = ({ treble, setTreble }) => (
  <Button onClick={() => treble < 100 ? setTreble((notch) => notch + 1) : treble}>+</Button>
);

const DecreaseTreble = ({ treble, setTreble }) => (
  <Button onClick={() => treble > 1 ? setTreble((notch) => notch - 1) : treble}>-</Button>
);

const IncreaseMid = ({ mid, setMid }) => (
  <Button onClick={() => mid < 100 ? setMid((notch) => notch + 1) : mid}>+</Button>
);

const DecreaseMid = ({ mid, setMid }) => (
  <Button onClick={() => mid > 1 ? setMid((notch) => notch - 1) : mid}>-</Button>
);

const IncreaseBass = ({ bass, setBass }) => (
  <Button onClick={() => bass < 100 ? setBass((notch) => notch + 1) : bass}>+</Button>
);

const DecreaseBass = ({ bass, setBass }) => (
  <Button onClick={() => bass > 1 ? setBass((notch) => notch - 1) : bass}>-</Button>
);








const Volume = ({ volume }) => (
  <>
    <span>{volume}</span>
    <span>Volume</span>
  </>
);

const Treble = ({ treble }) => (
  <>
    <span>{treble}</span>
    <span>Treble</span>
  </>

)

const Mid = ({ mid }) => (
  <>
    <span>{mid}</span>
    <span>Mid</span>
  </>
)

const Bass = ({ bass }) => (
  <>
  <span>{bass}</span>
  <span>Bass</span>
</>
)

ReactDOM.render(<AudioControls />, document.getElementById("root"));
