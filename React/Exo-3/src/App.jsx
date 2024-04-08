import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Le compter est à : {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
};

export default Counter;
