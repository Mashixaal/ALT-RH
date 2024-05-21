import React, {useState} from 'react'
import Account from './components/Account'
import Address from './components/Address'
import './App.css'


const App = () => {
  // Si modifié, mettra à jour le composant visuellement sur le navigateur
  const user = useState({
    completeName : "Safwan Hassan",
    address : "1 rue de conoris - 4200 Noisiel",
  });  
  // Si modifié, ne mettra pas à jour le composant visuellement sur le navigateur

  let count = 0;

  return (
    <div>
      <h1>Mon Application</h1>
      <div>
      <Account name={user.completeName} />
      <Address address={user.address} />
      </div>
      <p>Compteur : {count}</p>
    </div>
  );
};

export default App;
