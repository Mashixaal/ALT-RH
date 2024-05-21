import React, { useState } from "react";

const Counter = () => {
  const [count, useCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  console.log(count);

  return (
    <div>
      <p>le compteur est à : {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
};

export default Counter;
