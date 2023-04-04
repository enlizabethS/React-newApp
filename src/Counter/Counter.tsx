import React, { useState } from 'react';

function Counter(): JSX.Element {
  const [count, setCounter] = useState<number>(0);

  function hadlePlusChange(): void {
    setCounter(count + 1);
  }

  function hadleMinusChange(): void {
    setCounter(count - 1);
  }
  return (
    <>
      <button type="button" onClick={hadlePlusChange}>+</button>
      <span>{count}</span>
      <button type="button" onClick={hadleMinusChange}>-</button>
    </>
  );
}

export default Counter;
