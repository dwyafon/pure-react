import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";

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
  color: #fffacd;
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
`;

const AudioControls = () => {
  const [controls, setControls] = useState({
    volume: 1,
    treble: 1,
    mid: 1,
    bass: 1,
  });

  return (
    <Container>
      <InnerContainer>
        <DecreaseVolume
          controls={controls}
          setControls={setControls}
        ></DecreaseVolume>
        <TextContainer>
          {" "}
          <Volume volume={controls.volume} />{" "}
        </TextContainer>
        <IncreaseVolume
          controls={controls}
          setControls={setControls}
        ></IncreaseVolume>
      </InnerContainer>

      <InnerContainer>
        <DecreaseTreble
          controls={controls}
          setControls={setControls}
        ></DecreaseTreble>
        <TextContainer>
          {" "}
          <Treble treble={controls.treble} />{" "}
        </TextContainer>
        <IncreaseTreble
          controls={controls}
          setControls={setControls}
        ></IncreaseTreble>
      </InnerContainer>

      <InnerContainer>
        <DecreaseMid
          controls={controls}
          setControls={setControls}
        ></DecreaseMid>
        <TextContainer>
          {" "}
          <Mid mid={controls.mid} />{" "}
        </TextContainer>
        <IncreaseMid
          controls={controls}
          setControls={setControls}
        ></IncreaseMid>
      </InnerContainer>

      <InnerContainer>
        <DecreaseBass
          controls={controls}
          setControls={setControls}
        ></DecreaseBass>
        <TextContainer>
          {" "}
          <Bass bass={controls.bass} />{" "}
        </TextContainer>
        <IncreaseBass
          controls={controls}
          setControls={setControls}
        ></IncreaseBass>
      </InnerContainer>
    </Container>
  );
}

const IncreaseVolume = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.volume < 10
        ? setControls((controls) => ({
            ...controls,
            volume: controls.volume + 1,
          }))
        : controls.volume
    }
  >
    +
  </Button>
);

const DecreaseVolume = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.volume > 1
        ? setControls((controls) => ({
            ...controls,
            volume: controls.volume - 1,
          }))
        : controls.volume
    }
  >
    -
  </Button>
);

const IncreaseTreble = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.treble < 10
        ? setControls((controls) => ({
            ...controls,
            treble: controls.treble + 1,
          }))
        : controls.treble
    }
  >
    +
  </Button>
);

const DecreaseTreble = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.treble > 1
        ? setControls((controls) => ({
            ...controls,
            treble: controls.treble - 1,
          }))
        : controls.treble
    }
  >
    -
  </Button>
);

const IncreaseMid = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.mid < 10
        ? setControls((controls) => ({ ...controls, mid: controls.mid + 1 }))
        : controls.mid
    }
  >
    +
  </Button>
);

const DecreaseMid = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.mid > 1
        ? setControls((controls) => ({
            ...controls,
            mid: controls.mid - 1,
          }))
        : controls.mid
    }
  >
    -
  </Button>
);

const IncreaseBass = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.bass < 10
        ? setControls((controls) => ({ ...controls, bass: controls.bass + 1 }))
        : controls.bass
    }
  >
    +
  </Button>
);

const DecreaseBass = ({ controls, setControls }) => (
  <Button
    onClick={() =>
      controls.bass > 1
        ? setControls((controls) => ({
            ...controls,
            bass: controls.bass - 1,
          }))
        : controls.bass
    }
  >
    -
  </Button>
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
);

const Mid = ({ mid }) => (
  <>
    <span>{mid}</span>
    <span>Mid</span>
  </>
);

const Bass = ({ bass }) => (
  <>
    <span>{bass}</span>
    <span>Bass</span>
  </>
);

ReactDOM.render(<AudioControls />, document.getElementById("root"));
