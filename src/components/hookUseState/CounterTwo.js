// USESTATE with prev value
import React, { useState } from 'react'

function HookCounterTwo() {
    const initialVal = 0
    const [count, setCount] = useState(initialVal)

    const incFive = ()=>{
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount+1)
        //when have to update state based on the prev state pass in a func to the state setter
        }
    }
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialVal)}>Reset</button>
        <button onClick={()=> setCount(prevCount=> prevCount+1)}>Increment</button>
        <button onClick={()=> setCount(prevCount=> prevCount-1)}>Decrement</button>
        <button onClick={incFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
