import React from 'react';
import ReactDOM from 'react-dom';

//WITH CLASS
// class OneTimeButton extends Component {
//   state = {
//     clicked: false,
//   };
//   handleclick = () => {
//     this.props.onClicked();
//     this.setState({ clicked: true });
//   };

//   render() {
//     return (
//       <button onClick={this.handleclick} disabled={this.state.clicked}>
//         You can only click me once
//       </button>
//     );
//   }
// }

// WITH HOOK
function OneTimeButton({ onClicked}) {
    const [clickeddd, setClickeddd] = React.useState(false) 

    const handleclick = () => {
        onClicked()
        setClickeddd(true)
    }
    return (
        <button onClick={handleclick} disabled={clickeddd}>You can only click me once</button>
    )
}

ReactDOM.render(<OneTimeButton onClicked={() => alert('hi')} />, document.getElementById('root'))
