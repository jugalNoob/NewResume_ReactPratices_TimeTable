import React, { useState } from 'react';

function Stacks() {
  const [data, setData] = useState([]);
  const [pu, setPu] = useState('');

  const Pushing = (e) => {
    e.preventDefault();
    setData([...data, pu]); // Push 'pu' into the 'data' array
    setPu(''); // Clear the input field
  }

  const Display = (e) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name=""
          id=""
          value={pu}
          onChange={(e) => setPu(e.target.value)}
          placeholder='sexy one'
        />
        <button onClick={Pushing}>Push</button>
        <button onClick={Display}>Display</button>
      </form>

      <div>
        <h2>Data Array:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stacks;


// import React, { useState } from 'react'

// function Stacks() {
//     let data=[]
//     let item=data.length

//     const [pu , setPu]=useState([])
    
//     const Pushing=(e)=>{
//     e.preventDefault(); 
          
//            data[item] = pu;
//            item++;
// console.log(data)
//     }


  

//   const Display=(e)=>{
//     e.preventDefault();
//         console.log(data)
//         for(let i=0; i<data.length; i++){
//             console.log(data[i])
//         }
//     }


//   return (
//     <div>
// <form >
// <input type="text" name="" id="" onChange={(e)=>setPu(e.target.value)} placeholder='sexy one'/>

// <button onClick={Pushing}>push</button>


// <button onClick={Display}>display</button>
// </form>

//     </div>
//   )
// }

// export default Stacks