import React, { useState } from "react";
import Counter from "./components/Counter";


const App = () => {
  const isAdmin = false;

//   return (
//     <div>
//       <h3>My App</h3>
//       <Counter/>
//       {isAdmin ? (
//         <p>Vous étes admin</p>
//       ) : (
//         <p>Vous n'êtes pas admin</p>
//       )}
//     </div>
//   );
// }; 

return (
  <div>
    <h3>My App</h3>
    <Counter/>
    {isAdmin && <p>Vous êtes admin</p>} 
      <p>Vous étes admin</p>
  </div>
);
};


  // if (isAdmin) {
  //   return (
  //     <div>
  //       <h3>My App</h3>
  //       <Counter />
  //       <p>Je suis un admin</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h3>My App</h3>
  //       <Counter />
  //       <p>Je ne suis pas un admin</p>
  //     </div>
  //   );
  // }


export default App;
