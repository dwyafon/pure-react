import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Button = styled.button`
    background-color: ${props => props.light === true ? 'white' : 'black'}
`

const App = () => {
    return (
    <Container>
        <Room />
    </Container>
    )
}


const Room = (props) => {
    // hook
    const [light, setLight] = useState(false)

    const hitSwitch =() => {
        setLight(!light)
    }

    return (
        <div>
            <Button onClick={hitSwitch} light> 
                {light === false ? `The room is dark`: `The room is lit`}
            </Button>
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
