import React, { useState } from 'react'
import MouseMove from './MouseMove'

function MouseContainer() {
    const[display, setDisplay] = useState(false)
  return (
    <div>
      <button onClick={()=> setDisplay(!display)}>
        Toogle Mouse Display
      </button>
      {
        display && <MouseMove/>
      }
    </div>
  )
}

export default MouseContainer
