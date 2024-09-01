

// import React,{createContext , useState , useEffect} from 'react'
// import { ethers } from 'ethers';

// export const MyContext = createContext(); // Export the context here


// function Means({children}) {
//     const [state, setState] = useState({
//                 provider: null,
//                 signer: null,
//                 address: null
//             });
//                 useEffect(() => {
//         const Checker = async () => {
//             const provider = new ethers.providers.Web3Provider(window.ethereum);

//             if (provider ) {
//                 try {
//                     const accounts = await provider.send('eth_requestAccounts', []);
//                     const signer = provider.getSigner();
//                     const addr = await signer.getAddress();
//                     // console.log('Connected account:', accounts[0]);
//                     setState({ provider, signer, address: addr }); // Set state here
//                 } catch (error) {
//                     console.error('Error fetching account:', error);
//                 }
//             } else {
//                 console.log('Provider not available.');
//             }
//         };

//         Checker();
//     }, [state,]);
//   return (
//     <div>

// <MyContext.Provider value={state}>
//                 {children} {/* Render children inside the Provider */}
//             </MyContext.Provider>
//     </div>
//   )
// }

// export default Means



import { ethers } from 'ethers';
import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext();



function Means({ children }) {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        address: null
    });

    useEffect(() => {
        const Checker = async () => {
            try {
                // Check if window.ethereum is available
                if (window.ethereum) {
                    // Initialize provider
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    // Request accounts
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const signer = provider.getSigner();
                    const addr = await signer.getAddress();
                    setState({ provider, signer, address: addr });
                } else {
                    console.log('Metamask not detected.'); // or any other appropriate action
                }
            } catch (error) {
                console.error('Error fetching account:', error);
            }
        };

        Checker();
    }, []); // Removed state dependency from useEffect


    //Dark mode all check

 
  


    return (
        <>
  


        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>

        </>
    );
}

export default Means;