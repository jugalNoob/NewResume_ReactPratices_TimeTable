import React, { useMemo, useState } from 'react';

function Memo() {

    const [count , setCount]=useState(0);

    const [item, setIteem]=useState(10);


 const multiMemo=useMemo(function multiCoun(){

    console.log("jkljhsdc")

    return count *5;
},[count])


  return (
    <div>
      {/* useMemo */}
      <h1>{count}</h1>
    
      <h1>{item}</h1>
      <h1>{multiMemo}</h1>

<button onClick={(e)=>setCount(count+1)}>click</button>

<button onClick={(e)=>setIteem(item*5)}>update</button>
    </div>
  )
}

export default Memo

////////////Use Memo how useEffect //////////////

import React from 'react';

function App() {

  const [count , setCount]=useState(0)
  const [name , setName]=useState("")

  const noRender=useMemo(()=>{
    return<>
    <h1>No rnder agin {count} --- {name}</h1>
<h1>no render vs useMemo</h1>
    </>
  },[name])

  
  return (
    <div>
{noRender}
{/*  */}
<h1>Render it agin and agin {count}</h1>
<h1>no render vs useMemo</h1>

<button onClick={(e)=>setCount(count+1)}>clickme</button>

<button onClick={(e)=>setName("code step by step")}>clickme</button>
    </div>
  )
}

export default App