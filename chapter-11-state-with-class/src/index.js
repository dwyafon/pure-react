import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CountingParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actionCount: 0
        }

        this.handleAction = this.handleAction.bind(this);
    }

    handleAction(action) {
        console.log('Child says', action);
        this.setState({
            actionCount: this.state.actionCount + 1
        })
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction} />
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        )
    }
};

function Child({ onAction }) {
    return (
        <button onClick={onAction}>
            Click Me
        </button>
    )
}

ReactDOM.render(<CountingParent />, document.getElementById('root'))