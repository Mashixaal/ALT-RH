import { useState } from 'react'
import NavBar from './components/NavBar'
import Search from './components/Search'
// import '../src/App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-color'>
      <NavBar/>
      <Search/>
    </div>
  )
}

export default App
