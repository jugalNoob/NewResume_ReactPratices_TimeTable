
import React, { useEffect, useState } from 'react'

function UseMemo() {

    const [count , setCount]=useState(0)
    const [data , setData]=useState(10)

    useEffect(()=>{
        console.log(Math.random()+10)
    },[data])


  return (
    <div>
      
      <h1>counts{count}</h1> 
      <button onClick={()=>setCount(count+1)}>Click me</button>


      <h1>datadfvzfdv{data}</h1>
      <button onClick={()=>setData(data+1)}>Click me</button>
    </div>
  )
}

export default UseMemo




