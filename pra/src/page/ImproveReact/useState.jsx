useState
useEffect
useContext
useReducer
useRef
useMemo
useCallback
useLayoutEffect
useImperativeHandle
useDebugValue










import React, { useState } from 'react'

function App() {
  const [ch, setCh] = useState('jugal sharma');

  const handleClick = () => {
    setCh(prevCh => prevCh === 'jugal sharma' ? 'kanaika sharma' : 'jugal sharma');
  };

  return (
    <div>
      <h1>{ch}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;


import React, { useEffect, useReducer } from 'react'

function App() {
  const [ch , setCh]=useState("jugal sharma")

  const Changes=()=>{

    if(ch ===  "jugal sharma"){
      setCh("kanaika sharma")
    }else{

      setCh("jugal sharma")
    }
   

  }
  return (
    <div>


<h1>{ch}</h1>

<button onClick={Changes}>onClick</button>
    </div>
  )
}

export default App



// import React, { useState } from 'react';

// function App() {
//   const [students, setStudents] = useState([
//     { name: "jugal", class: "10th", room: "10", sex: "male" },
//     { name: "kanika", class: "20th", room: "69", sex: "female" },
//     { name: "anku", class: "30th", room: "99", sex: "male" },
//     { name: "karan", class: "40th", room: "100", sex: "male" },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredStudents = students.filter((student) => {
//     return (
//       student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.sex.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <input type="text" name="" onChange={handleSearch} value={searchTerm} />
//       {filteredStudents.map((student) => {
//         return (
//           <>
//             <h1>name: {student.name}</h1>
//             <h1>class: {student.class}</h1>
//             <h1>room: {student.room}</h1>
//             <h1>sex: {student.sex}</h1>
//           </>
//         );
//       })}
//     </div>
//   );
// }

// export default App;


|||||Inpute handles Change

  const [video  , setVideo]=useState({
    view:"jugal",
    name:"jugal",
    boolean:true
  })

  console.log(video)
const Change=(e)=>{

  setVideo({...video, [e.target.name]:e.target.value})

  console.log(video)
 
}


<input type="text" name="tiles" onChange={Change} />
<h1>{video.tiles}</h1>
<button >onclick</button>
/////////////////////////Image Loop

import React from 'react'
import "./App.css"
import One from "./one.png"
function App() {
  const images = [1, 2, 3, 4, 5 ];

  return (
    <div>
          <h1>juga</h1>
      {images.map((image) => (
       

        <img src={One} className='ones' width="200px" height="200px" alt={`Image ${image}`} key={image} />
           
 
      ))}


    </div>
  );
}

export default App;