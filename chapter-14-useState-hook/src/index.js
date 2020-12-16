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
// clickeddd is the state value, and setClicked is the setter function -- these are bespoke names, up to the developer
// each useState can store one value of any JS type
function OneTimeButton({ onClicked }) {
    // call all hooks at the top level of the function, in chosen order; here, only one is being called -- at first render (to populate the hooks array 
    // within the component object) and then again with each re-ender, each hook called in order here
    const [clicked, setClicked] = React.useState(false) // array desctructuring -- developer can assign names when destructuring; initial state value set to false

    const handleclick = () => { //click handler
        onClicked() // calls the function passed as a prop in the render (below) to the component, which can then be called, because of shared scope, in the click handler 
        setClicked(true) // calls setter function obtained from useState() that is coupled with the state variable 'clicked'
    }
    return (
        // clicked begins as false, so the button is not disabled; clicking the button calls handleclick() 
        // which calls onClicked() -- creating the alert -- and sets the state, via setClicked(). Consequently, the disabled attribute's value is true and the button is disabled 
        <button onClick={handleclick} disabled={clicked}>You can only click me once</button> 
    )
}

ReactDOM.render(<OneTimeButton onClicked={() => alert('hi')} />, document.getElementById('root'))
