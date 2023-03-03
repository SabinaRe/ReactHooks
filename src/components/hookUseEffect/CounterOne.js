//conditionally run the useEffect by passing second parameter inside the []
import React, { useEffect, useState } from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)
    const[name, setName] = useState('')
    useEffect(()=>{
      console.log("useEffect calling")
        document.title = `You have clicked' ${count} times`
    },[count])
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.setValue)} />
      <button onClick={()=> setCount(count+1)}>Click {count} time</button>
    </div>
  )
}

export default CounterOne
