import { useState } from 'react'
import './App.css'
import PollForm from './components/PollForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PollForm addPoll={(pollName) => console.log("New Poll Added:", pollName)} />
    </>
  )
}

export default App
