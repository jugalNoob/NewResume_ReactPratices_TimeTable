import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/progessbar.css";

function Progbar() {


    //get url  ------------------------ how to get url in react.js
    const { id } = useParams(); // Access the id from the URL
    const fullUrl = window.location.href; // Get the full URL

    console.log(id, "id"); // Logs the id parameter
    console.log(fullUrl, "full URL"); // Logs the full URL




// progessbar  ----------------------------

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
