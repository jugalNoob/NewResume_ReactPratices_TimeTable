

// object desturcting function  ------------------------->


// import React, { useEffect, useState } from 'react';

// function Usestates() {
//   const [data, setData] = useState({ x:10 ,y:20 });
//   // const [data, setData] = useState({ x:null ,y:null });

//   const change = () => {
//     let x = 45;
//     let y = 14;
//     setData({ x, y });
//   };

//   const Checkall = () => {
//     const { x, y } = data;
//     console.log(x, y);
//   };

//   // Use useEffect to simulate component lifecycle behavior
//   useEffect(() => {
//     change();
//     Checkall();
//   }, []); // The empty array ensures this runs only once when the component mounts

//   return (
//     <div>
//       <h1>Jugal</h1>
//     </div>
//   );
// }

// export default Usestates;



// ----> create  a push  simple push uadte  ------------------------->>

// import React, { useEffect, useState } from 'react';

// function useStatess() {

//   const [add , setAdd]=useState("")


//   const addData = () => {
//     setAdd((...prev)=>{

//       return [...prev, add]
//     })
//   };

//   useEffect(()=>{
//     console.log(add)
//   },[add])

//   return (
//     <div>

//       <input value={add} onChange={(e)=>setAdd(e.target.value)} placeholder='name'/>

//       <button onClick={addData}>Add</button>

      
//     </div>

 
//   )
// }

// export default useStatess


:::::::::::::::::::::: DarkMode :::::::::::::::::::::::::::::::::::::::::
  // Tipes and tricks with useStatic
  const [add, setAdd] = useState(18);
  function Change() {
    setAdd(!add);
  }

  return (      
    <div>

    <input type="file" name="" id="" />
<h1 style={{color:add ? "red" : "blue"}}>my fuck</h1>
      <h1>{add ? "true" : "false"}</h1>
      <button onClick={Change}>{add ? "light" : "dark"}</button>
    </div>
  );
}

export default App;






import React, { useEffect, useState } from 'react';

function UseStatess() {
  const [add, setAdd] = useState([]); // Initialize as an array to store multiple names
  const [inputValue, setInputValue] = useState(""); // Separate state to handle input

  const addData = () => {
    if (inputValue.trim() !== "") {
      setAdd(prev => [...prev, inputValue]); // Add new input to the array
      setInputValue(""); // Clear input field after adding
    }
  };

  useEffect(() => {
    console.log(add);
  }, [add]); // Logs the updated list of names

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="name"
      />

      <button onClick={addData}>Add</button>

      <div>
        <h3>Added Names:</h3>
        <ul>
          {add.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseStatess;
