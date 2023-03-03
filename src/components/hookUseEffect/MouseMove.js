//calling of the USE EFFECT only in the first mount
import React, { useState, useEffect } from 'react'

function MouseMove() {
    const[X, setX] = useState(0)
    const[Y, setY] = useState(0)

    const logMousePosition=(e)=>{
        setX(e.x)
        setY(e.y)
    }

    useEffect(()=>{
        console.log("useEffect of move mouse")
        window.addEventListener('mousemove', logMousePosition)

        //clean-up function when display button is toggled to hide
        return(()=>{
            console.log("component unmounting  code")
            window.removeEventListener('mousemove', logMousePosition)
        })

    },[])

  return (
    <div>
        Hooks X is at {X} & Y is at {Y}
    </div>
  )
}

export default MouseMove
