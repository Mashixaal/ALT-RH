import React from "react";
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

  const arr = [
    { firstName: "Safwan", lastName: "Jamal" },
    { firstName: "Babacar", lastName: "Sidy" },
    { firstName: "Dany", lastName: "Nasim" },
  ];

  return (
    <ul>
      {arr.map((item, index) => (
        <li key={index}>
          {item.firstName} {item.lastName}
        </li>
      ))}
    </ul>
  );
};

export default App;
