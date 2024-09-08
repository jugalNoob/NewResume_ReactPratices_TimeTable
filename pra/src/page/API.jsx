// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function API() {
//   const [search, setSearch] = useState(''); // To store the search input
//   const [data, setData] = useState([]); // To store the API data

//   // Fetch the data from the API
//   const apisear = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    
//       console.log(response)
//       setData(response.data); // Store the API data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Fetch data once when the component mounts
//   useEffect(() => {
//     apisear();
//   }, []);

//   // Filter users based on the search input
//   const filteredUsers = data.filter(user => 
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <input 
//         type="text" 
//         name="name" 
//         onChange={(e) => setSearch(e.target.value)} // Update search state with user input
//         value={search}
//         placeholder='Search by name'
//       />

//       {/* Display the filtered users */}
//       {filteredUsers.map((user) => (
//         <div key={user.id}>
//           <h1>{user.id}</h1>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default API;








// // Api Search service for searching   ------------------------------><><><><><>
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// function API() {


//   // this is my search api services that will be used 

//   const [search, setSearch] = useState([]);
//     const [data, setData] = useState([]);
//   const apisear=async()=>{
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     // console.log(response.data)
//     setData(response.data);
// let use=response.data;
// console.log(use)


// //name search with Inpute

// setSearch(response.data)

// ///search with name use linear search 
// //let sears = 'Leanne Graham'; // User id to search for

// let  sears='Leanne Graham'
// for (let user of use) {
//   if (user.name === sears) {
  
//     console.log(user); // Logs the user object with the id of 3
//     break; // Exit the loop once the user is found
//   }
// }

//   }
//   useEffect(()=>{
//     apisear()
//   },[])



//   return (
//     <div>

// <input type="text" name="name" 
// onChange={(e)=>setSearch(e.target.value)} id=""  placeholder='serach Your name'  />




//     {
//       data.map((user) => (
//         <div key={user.id}>
//         <h1>{user.id}</h1>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       ))

//     }

//     </div>
//   )
// }

// export default API















//// simple API  only available for demo purposes only ----------------------<><><>


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function API() { 
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       setData(response.data);
//       setLoading(false);
//     } catch (error) { 
//       console.log('Error fetching data:', error);
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [data]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : data.length === 0 ? (
//         <div>No data available</div>
//       ) : (
//         data.map((item, index) => (
//           <div key={index}>
//           <h1>{item.id}</h1>
//             <h1>{item.name}</h1>
         
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default API;




//////////////// Api Number Two start row classs 


import axios, { AxiosError } from 'axios';
import React, { useEffect } from 'react';

function API() { 


  // adavance methods for Api


  let api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users"
  })

  api.get('/')
  .then(response => {
    console.log(response.data);
    console.log('jugal sharma')
  })
  .catch(error => {
    console.error(error);
  });
  

  api.delete('/1') // Assuming you're deleting the user with ID 1
  .then(response => {
    console.log(response.data);
    console.log('jugal sharma  delte');
  })
  .catch(error => {
    console.error(error);
  });





  // async function fetchData() {
  //   try {
  //     const response = await api.get('/');
  //     console.log(response.data);
  //     console.log('jugal sharma');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  // fetchData();





  const one = async () => {
    const api = "https://jsonplaceholder.typicode.com/users";
    
    try {
      const response = await axios.get(api);
      // console.log('Response:', response.data);
    } catch (error) {

      console.error(error.message)
      console.error(error.response.status)
      console.error(error.response.data)


      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else if (error instanceof AxiosError) {
        console.log('Error:', error.message);
      } else {
        console.log('Unknown error', error);
      }
    }
  };

  useEffect(() => {
    one();
  }, []);

  return (
    <div>
      Check the console for API response.
    </div>
  );
}

export default API;



/// ----------------> Adavance