import React, { useEffect, useState } from 'react'

function IntervalCounter() {
    const[count, setCount] = useState(0)

    const tick=()=>{
        // setCount(count+1)
        setCount(prevC => prevC+1)
        //  with this you don't have to pass count in the array dependency
        //as the prevC is keeing track of count value
    }

    useEffect(()=>{
        const interval= setInterval(tick, 1000)
        return(()=>{
            clearInterval(interval)
        })
    },[])
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalCounter
