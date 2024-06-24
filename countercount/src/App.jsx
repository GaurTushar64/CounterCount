import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue = () => {
    count++;
    setCount(count);
  }
  const minusvalue= ()=>{
    // count--;
    if(count-1 < 0){
      alert("Value cannot be negetive");
    } else {

      setCount(count-1);
      
    }
   
  }

  return (
    <>
      <h1>Counter Count</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addvalue}>Upgrade Value </button>
      <br/>
      <button onClick={minusvalue}>Degrade Value</button>
    </>
  )
}

export default App
