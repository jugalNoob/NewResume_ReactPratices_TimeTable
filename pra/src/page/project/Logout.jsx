

//::: ------------->First Login logic  


// import React from 'react';

// function Logout() {

//     const username = localStorage.getItem('username');
// console.log(username); // Outputs: JohnDoe
//     // Check if a user is logged in
//     if (username) {
//         console.log("login: " + username);
//         return (
//             <>
//                 <h1>jugal sharma</h1>
//             </>
//         );
//     } else {
//         return (
//             <>
//                 <h1>Logout </h1>
//             </>
//         );
//     }
// }

// export default Logout;




// :: --> second level logic of login and out 


import React, { useEffect, useState } from 'react';

function Logout() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

   

    useEffect(() => {
        // Check user's authentication status on component mount
        const usersDataToken = localStorage.getItem("usersdatatoken");
        if (usersDataToken) {
          setIsLoggedIn(true);
        }
      }, []);
  return (
    <div>

{isLoggedIn ? (
              <>
             
              <h1>login </h1>
              </>
            ) : (
              <>
          
           <h1>logout</h1>
              </>
            )}
      
    </div>
  )
}

export default Logout


// useEffect(() => {  very important code here
//     if (!localStorage.getItem("usersdatatoken")) {
//       alert("please Login form")
//       navigate("/");
//     }
//   }, []);