import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NormalCounter from './Components/NormalCounter'
import ReduxCounter from './Components/ReduxCounter'
import User from './Components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <User></User>
      </div>
    </>
  )
}

export default App
