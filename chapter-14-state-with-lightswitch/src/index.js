import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${props => props.light === true ? 'white' : 'black'};
`
const Button = styled.button`
    background-color: ${props => props.light === true ? 'white' : 'black'};
    color: ${props => props.light === true ? 'black' : 'white'};
`

const Room = () => {
    const [light, setLight] = useState(false)
     const hitSwitch =() => {
        setLight(!light)
    }
    return (
    <Container light={light}>
        <Button light={light} onClick={hitSwitch}>{light === false ? `The room is dark`: `The room is lit`}</Button>
    </Container>
    )
}





ReactDOM.render(<Room />, document.getElementById('root'))
