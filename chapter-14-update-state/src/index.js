import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function StepTracker() {
    // hook
    const [steps, setSteps] = useState(0)

    // function increment() {
    //     setSteps(steps => steps + 1)
    // }

    return (
        <div>
            Today you've taken {steps} steps!
            <br />
            {/* Could have been: */}
            {/* <button onClick={increment}></button> */}

            {/* the parameter name does not have to be the same as the state variable name */}
            {/*  using the functional/updater form of setSteps ensures that the latest state value is being operated on */}

            <button onClick={() => setSteps(step => step + 1)}> 
                I took another step
            </button>
        </div>
    )
}

ReactDOM.render(<StepTracker />, document.getElementById('root'))
