import { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import './App.css'

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  const switcher = () => {
    isLogged ? setIsLogged(false) : setIsLogged(true);
  };

  if(isLogged){
    return(
      <Logout onClick={switcher}/>
    )
  }else{
    return(
      <Login onClick={switcher}/>
    )
  }
}

export default App
