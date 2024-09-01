import { ethers } from 'ethers';
import React, { useContext, useState } from 'react';
import abi from "./ABI.json";
import { MyChanging } from './Dark';
import { MyContext } from './Means'; // Import MyContext from Means


function Home() {

  const { provider, signer, address } = useContext(MyContext );


  const style = useContext(MyChanging);



  // const {check}=useContext(MyChanging)


  const [loading, SetLoad]=useState()

  const [rand , setRand]=useState()
  
  

  const contractAddress="0xF06B7BdFD1F9219C58666d777b4658F2fc09E16E";


// ---> update your values here start now ------------------>
  const oneall = async () => {
    try {
        if (contractAddress && abi && provider) {
       
                try {
                 // Move SetLoad(true) here
                    const contract = new ethers.Contract(contractAddress, abi, provider);
                    const tickets = await contract.one();
                    console.log(tickets.toString());
                    setRand(tickets.toString());
                   // Set loading state to false after completion
                  
                } catch (error) {
                    console.log(error, "check error");
                    // Handle error
                }
        
        } else {
            console.log("Contract address, ABI, or provider is missing.");
        }
    } catch (error) {
        console.log("Error in oneall:", error);
        // Handle error
    }
}
oneall();


  const [all , setAll]=useState()
  
  const update = async () => {
    
    try {
    if (contractAddress && abi && provider) {
      setTimeout(async () => {
                try {
                    SetLoad(true); // Set loading state to true before async operation
                    const contractss = new ethers.Contract(contractAddress, abi, signer);
                    const tickets = await contractss.All(all);
                    console.log(tickets);
                    setRand(tickets.toString());
                    SetLoad(false);
                    alert('msg'); // Set loading state to false after async operation
                } catch (error) {
                    console.log(error, "contract message error");
                    // Handle error
                }
            }, 2000);
        } else {
          console.log("Contract address, ABI, or provider is missing.");
            // Handle error
        }
    }catch(error) {
      console.log("Error in oneall:", error);
    }
}


//Check 



    return (
        <div>

      <h1 style={{ color: style ? 'red' :
       'black' }}>jugal</h1>



{loading ? (
  <p>Loading...</p> // Display a loading indicator
) : (
  <>
  <h1>random{rand }</h1>
  <button onClick={update}>click</button>
  <br />
  <br />
      </>
)}


<input
    type='text'
    value={all}
    placeholder='enter Your Crypto'
    onChange={(e) => setAll(e.target.value)}
></input>
      
     
        </div>
    );
}

export default Home;
//     simple import react

// let ones=one()
// console.log(ones +45)


// start advance importing