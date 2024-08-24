import React, { useState } from 'react';

function Debounce() {

  // |||||||||||||||||||Throtted||||||||||||  ---->Important
//   <button onclick="sendEmail()">sendEmail</button>
// let count = 1;
// let isThrottled = false;
// function sendEmail() {

//     let i="my name is number"
//     if (!isThrottled) {
//         console.log('Sending', count++ , i);
//         isThrottled = true;
//         setTimeout(() => {
//             isThrottled = false;
//         }, 1000);
//     }
// }







/// debounce()  every one know that 
  const debounce=()=>{
    let timeout;
    clearTimeout(timeout)
timeout=setTimeout(()=>{
        console.log("jugal sharma")
    },1000)
}
// debounce()
{/* <button onclick="debounce(sendEmail, 1000)">sendEmail</button>

let count = 1;
let timeout;

function sendEmail() {
    let i = "my name is number";
    console.log('Sending', count++, i);
}
function debounce(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
} */}



/// Loading  is ver Important in react 

const [loading, SetLoad]=useState()
const Reand=async()=>{
  SetLoad(true)
setTimeout(()=>{
  SetLoad(false)
  alert('msg');
  console.log(bal.toString())
  setRand(bal.toString())
},2000)
}


  return (
    <div>
    <h1>important</h1>


    ///exmplae  {loading ? (
  <p>Loading...</p> // Display a loading indicator
) : (
  <>
  <h1>random{rand }</h1>
    
  <button onClick={Reand}>Generate</button>
  <br />
  <br />
      </>
)}

//  <button disabled={isLoading} onClick={ Clicked}>
      {isLoading ? "Adding..." : "Submit"}
      </button>






    <button onClick={debounce}>click me debounce</button>
      
    </div>
  )
}

export default Debounce
