import { useState } from 'react'
import SimpleForm from './components/SimpleForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SimpleForm />
    </>
  )
}

export default App
