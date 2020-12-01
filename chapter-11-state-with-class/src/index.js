import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Page = () => (
  // each CountingParent component has its own independent state
  <div>
    <CountingParent />
    <CountingParent />
    <CountingParent />
    <CountingParent />
  </div>
);

class CountingParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionCount: 0,
    };

    this.handleAction = this.handleAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleAction(action) {
    this.setState((state, props) => { 
        return {
            actionCount: state.actionCount + 1
        }
    });
}

  reset() {
    this.setState((state, props) => {
      return {
        actionCount: 0,
    };
      })  
    }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} />
        <ResetButton onAction={this.reset} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

function Child({ onAction }) {
  return <button onClick={onAction}>Click Me</button>;
}

const ResetButton = ({ onAction }) => <button onClick={onAction}>Reset</button>;

ReactDOM.render(<Page />, document.getElementById('root'));
