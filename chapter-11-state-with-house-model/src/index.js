import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Community = () => (
  // each CountingParent component has its own independent state
  <div>
    <House />
  </div>
);

class House extends Component {
  state = {
    rooms: {
      kitchen: false,
      bathroom: false,
      livingRoom: false,
      bedroom: false,
    },
  };

  OnOff = (e) => {
    const rooms = { ...this.state.rooms}
    const name = e.target.name;
    rooms[name] = !this.state.rooms[name]
    this.setState((state) => {
      return {
         rooms
      };
    });
  };

  render = () => {
    return (
      <div className='container'>
        <Kitchen doStuff={this.OnOff} status={this.state.rooms.kitchen}/>
        <Bathroom doStuff={this.OnOff} status={this.state.rooms.bathroom}/>
        <LivingRoom doStuff={this.OnOff} status={this.state.rooms.livingRoom}/>
        <Bedroom doStuff={this.OnOff} status={this.state.rooms.bedroom}/>
      </div>
    );
  };
}

const Kitchen = ({ doStuff, status }) => {
  return (
    <button onClick={doStuff} name={'kitchen'} className={status === true ? 'lightOn' : ''}>
    Kitchen
  </button>
  )
  
  
};

const Bathroom = ({ doStuff, status }) => (
  <button onClick={doStuff} name={'bathroom'} className={status === true ? 'lightOn' : ''}>
    Bathroom
  </button>
);

const LivingRoom = ({ doStuff, status }) => (
  <button onClick={doStuff} name={'livingRoom'} className={status === true ? 'lightOn' : ''}>
    Living Room
  </button>
);

const Bedroom = ({ doStuff, status }) => (
  <button onClick={doStuff} name={'bedroom'} className={status === true ? 'lightOn' : ''}>
    Bedroom
  </button>
);

// const LightSwitchButton = ({ doStuff }) => {
//   <button onClick={doStuff} name={'kitchen'}>Click</button>}

ReactDOM.render(<Community />, document.getElementById('root'));
