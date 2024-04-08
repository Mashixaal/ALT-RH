const Counter = () => {
  let count = 0;

  const increment = () => {
    count++;
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
