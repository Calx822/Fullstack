import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        {good}
      <button onClick ={()=> setGood(+1)}>
      one
      </button>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)