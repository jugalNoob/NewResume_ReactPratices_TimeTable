

// /// first base API method start row class


import axios from 'axios';
import React, { useEffect, useState } from 'react';

function API() {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apisear = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response.data);
            setData(response.data);
      setLoading(false);

      // setData(response.data); // You can store the data here if needed
    } catch (error) {
      // Handling various error cases
      setLoading(false);

      if (error.response) {
        // The request was made, and the server responded with a status code outside of the range of 2xx
        console.error("Error fetching data:", error.response.status);
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something else happened in making the request
        console.error("Error:", error.message);
      }
    }
  };

  // Fetch data once when the component mounts
  useEffect(() => {
    apisear();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  
  return (
    <div>
   
   {loading ? (
         <div>Loading...</div>
       ) : data.length === 0 ? (
         <div>No data available</div>
       ) : (
         data.map((item, index) => (
           <div key={index}>
           <h1>{item.id}</h1>
             <h1>{item.name}</h1>
         
           </div>
         ))
       )}


    </div>
  );
}

export default API;










/// ---------- >>>  Simple API search Api  ::::::::::::::::::::----------->



import axios from 'axios';
import React, { useEffect, useState } from 'react';

function API() {
  const [search, setSearch] = useState(''); // To store the search input
  const [data, setData] = useState([]); // To store the API data

  // Fetch the data from the API
  const apisear = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    
      console.log(response)
      setData(response.data); // Store the API data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data once when the component mounts
  useEffect(() => {
    apisear();
  }, []);

  // Filter users based on the search input
  const filteredUsers = data.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        name="name" 
        onChange={(e) => setSearch(e.target.value)} // Update search state with user input
        value={search}
        placeholder='Search by name'
      />

      {/* Display the filtered users */}
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default API;




 ////  ----------------->>>  Adavance Seacrh API Mehods --------------->>>

// // Api Search service for searching   ------------------------------><><><><><>
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function API() {


  // this is my search api services that will be used 

  const [search, setSearch] = useState([]);
    const [data, setData] = useState([]);
  const apisear=async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(response.data)
    setData(response.data);
let use=response.data;
console.log(use)


//name search with Inpute

setSearch(response.data)

///search with name use linear search 
//let sears = 'Leanne Graham'; // User id to search for

let  sears='Leanne Graham'
for (let user of use) {
  if (user.name === sears) {
  
    console.log(user); // Logs the user object with the id of 3
    break; // Exit the loop once the user is found
  }
}

  }
  useEffect(()=>{
    apisear()
  },[])



  return (
    <div>

<input type="text" name="name" 
onChange={(e)=>setSearch(e.target.value)} id=""  placeholder='serach Your name'  />




    {
      data.map((user) => (
        <div key={user.id}>
        <h1>{user.id}</h1>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))

    }

    </div>
  )
}

export default API




