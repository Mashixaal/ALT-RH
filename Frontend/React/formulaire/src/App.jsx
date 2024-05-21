import { useState } from 'react'
import './App.css'
import Informations from './components/Informations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Informations />
    </>
  )
}

export default App
