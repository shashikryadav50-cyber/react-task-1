import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Counter</h2>

      <p>Current Count: {count}</p>

      <button onClick={decrease}>-</button>

      <button onClick={reset}>Reset</button>

      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;