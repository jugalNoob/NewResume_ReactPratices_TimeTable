import axios from 'axios';
import React, { useEffect, useState } from 'react';

function API() { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
      setLoading(false);
    } catch (error) { 
      console.log('Error fetching data:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

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




////////////////// Api Number Two start row classs 


// import axios, { AxiosError, isCancel } from 'axios';
// import React, { useEffect } from 'react';

// function API() { 

//   const one = async () => {
//     const api = "https://jsonplaceholder.typicode.com/todos/1";
    
//     try {
//       const response = await axios.get(api);
//       console.log('Response:', response.data);
//     } catch (error) {
//       if (axios.isCancel(error)) {
//         console.log('Request canceled', error.message);
//       } else if (error instanceof AxiosError) {
//         console.log('Error:', error.message);
//       } else {
//         console.log('Unknown error', error);
//       }
//     }
//   };

//   useEffect(() => {
//     one();
//   }, []);

//   return (
//     <div>
//       Check the console for API response.
//     </div>
//   );
// }

// export default API;
