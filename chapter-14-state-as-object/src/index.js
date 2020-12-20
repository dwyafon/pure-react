import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const MultiCounter = () => {
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0,
  });
  const incA = () =>
    setCounts((counts) => ({
      ...counts,
      countA: counts.countA + 1,
    }));
  const incB = () =>
    setCounts((counts) => ({
      ...counts,
      countB: counts.countB + 1,
    }));
// Without spreading the counts object, setCounts() replaces the counts object with the object containing only countA;
// consequently, if the B button is clicked again, B will be added back to the counts object with a value of NaN.
  const badIncA = () =>
    setCounts({
      countA: counts.countA + 1,
    });
  return (
    <>
      <div> A: {counts.countA} </div>
      <div> B: {counts.countB} </div>
      <button onClick={incA}>Increment A</button>
      <button onClick={incB}>Increment B</button>
      <button onClick={badIncA}>Increment A Badly</button>
    </>
  );
};
ReactDOM.render(<MultiCounter />, document.querySelector('#root'));
