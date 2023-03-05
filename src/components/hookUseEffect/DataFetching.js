import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [post, setPost] = useState({})
    const[id, setId] = useState(1)
    const[idFromBtnClick, setidFromBtnClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
        .then(res=> {
            console.log("list of data", res.data)
            setPost(res.data)
        })
        .catch(err => console.log("error is", err))
    },[idFromBtnClick])

    const handleClick=()=>{
      setidFromBtnClick(id)
    }
  return (
    <div>
      <input type="text" value={id} onChange={e=> setId(e.target.value)} />
      <button type='text' onClick={handleClick}>Fetch Data</button>

      <h1>{post.title}</h1>
    </div>
  )
}

export default DataFetching
