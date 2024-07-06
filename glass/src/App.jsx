import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Glasses } from './components/glass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Glasses/>
    </>
  )
}

export default App
