import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  //   const arr = [1, 2, 3, 4, 5];

  //   return (
  //     <ul>
  //       {arr.map((item) => (
  //         <li>{item}</li>
  //       ))}
  //     </ul>
  //   );
  // };

  //   const arr = [
  //     { firstName: "Safwan", lastName: "Jamal" },
  //     { firstName: "Babacar", lastName: "Sidy" },
  //     { firstName: "Dany", lastName: "Nasim" },
  //   ];

  //   return (
  //     <ul>
  //       {arr.map((item, index) => (
  //         <li key={index}>
  //           {item.firstName} {item.lastName}
  //         </li>
  //       ))}
  //     </ul>
  //   );

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effectue une exéction quand le composant est monté,
    // Puis le refait à chaque fois que count change
    console.log("exécution de useEffect");
  }, [count]);

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
};

export default App;
