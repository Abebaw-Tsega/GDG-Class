import { useState } from 'react'
import './user.css'

function Counter() {
  const [value, setValue] = useState(0)

  const increment = () => {
    setValue(value + 1)
  }
  
  const decrement = () => {
    setValue(value - 1)
    if (value <= 0) {
      setValue(0)
    }
  }

  const rest = () => {
    setValue(0)
  }

  return (
    <div className="counter">
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={rest}>Rest</button>
    </div>
  )
}

export default Counter