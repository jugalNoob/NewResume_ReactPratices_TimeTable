import React, { useEffect, useState } from 'react';
import "./style/progessbar.css";

function Progbar() {

    const [filled , setFiiled]=useState(0)

    const [run , setRun]=useState()


    // useEffect(() => {
    //     if (filled <= 100 && run) {
    //         const timer = setTimeout(() => {
    //             setFiiled(prevFilled => prevFilled + 2);
    //         }, 100);
            
    //         return () => clearTimeout(timer); // Clean up the timeout
    //     } else if (filled >= 100) {
    //         alert("Complete");
    //         setRun(false); // Stop the process after completion
    //     }
    // }, [filled, run]);


    //easy way to 


    useEffect(()=>{

        if(filled < 100  && run){
            setTimeout(()=>setFiiled(prev=>prev+2) , 100)
        }

        // if(filled >= 100){
        //     alert("Complete");
        //     setRun(false);
        // }

      
    }, [filled , run])


    //progessBar  in React 

  return (
    <div>

<div className="pro">

<div style={{
    width: `${filled}%`,
    backgroundColor: "red",
    height: "100%",
    width:`${filled}%`,
    transition: "width 0.5s "
  
}}></div>
<span className='progressPercent'>{filled}%</span>
</div>


<button onClick={()=>setRun(true)}>click</button>

    </div>
  )
}

export default Progbar
