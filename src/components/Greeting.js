import { useState } from 'react'
import Output from './Output'

const Greeting = () => {
  const [changedText, setChangedText] = useState(false)

  const handleChangeText = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2>Hello world</h2>
      {changedText ? <Output>Changed</Output> : <Output>Some text</Output>}
      <button onClick={handleChangeText}>Change text</button>
    </div>
  )
}

export default Greeting
