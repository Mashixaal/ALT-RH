import { useState } from 'react'
import Acceuil from './components/Acceuil'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Acceuil />
    </>
  )
}

export default App
