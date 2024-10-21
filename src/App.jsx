import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'

function App() {

  const [state, setState] = useState(0)
  let storageVar = 0;

  const handleState = () => {
    setState(state + 1)
  }


  const handleVariable = () => {
    storageVar += 1
  }

  return (
    <>
      <div>
        <h1>This is state count {state}</h1>
        <h1>This is variable Count {storageVar}</h1>
      </div>

      <button onClick={handleState}>Change State Count</button>
      <button onClick={handleVariable}>Change Variable COunt</button>


      <br />

      <h1>Hello React</h1>
    </>
  )
}

export default App
