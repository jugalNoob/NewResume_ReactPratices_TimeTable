// // exmaple one use Memo function  ----------------------------->


// import React, { useMemo, useState } from 'react';

// function Practice() {
//     const [count, setCount] = useState(0);
//     const [item, setItem] = useState(2);
//     //exmaple one  ---------------->
//     const multi=useMemo(()=>{  
//         console.log("muti count")
//         return count * 4
//     } , [count])
//     // example two ---------->
//   return (
//     <div>

// <h1>count::{count}</h1>
// <button onClick={()=>setCount(count+1)}>click me</button>

// <h1>mutli::{multi}</h1>



// <h1>item::{item}</h1>
// <button onClick={()=>setItem(item*10)}>update item</button>

//     </div>
//   )
// }

// export default Practice




// Example two use Memo Function  -------------------->
// import React, { useMemo, useState } from 'react';

// // Rename component to follow React naming conventions
// const ExpensiveComponent = () => {
//   // Memoize the expensive computation so it's only calculated once unless dependencies change
//   const sum = () => {


//     console.log('Calculating sum...');

//     let i = 0;
//     for ( i = 0; i < 100000000; i++) {
//       i += 1;
//     }

//     return i;
//   }; // Empty dependency array means this runs only once on component mount


//   const total=useMemo(()=>{

//     return sum()

//   },[])

// //   const total=sum()
//   return <h1>Sum: {total}</h1>;
// };

// function Practice() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <ExpensiveComponent /> {/* Corrected usage */}
      
//       <button onClick={() => setCount(count + 1)}>Re-render parent</button>
//       <h1>Parent Re-Render Count: {count}</h1>
//     </div>
//   );
// }

// export default Practice;



/// example to three components --------------------> 
//use Effect VS use Memo



import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [count , setCount]=useState(0)
    const [data , setData]=useState(10)

    //useEffect exmaple 
    // useEffect(()=>{
    //     console.log(Math.random()+10)
    // },[data])


    const noRender=useMemo(()=>{
        return<>

<h1 style={{color:"red"}}>no render agin {count}</h1>
<h1 style={{color:"red"}}>useEffect vs use Memo</h1>

        </>
    },[])

  return (
    <div>

{noRender}


<h1>Render it again and again{count}</h1>
<h1>useEffect vs use Memo</h1>

<button onClick={()=>setCount(count+1)}>Upload</button>


{/*       useEffect Example 
      <h1>count{count}</h1> 
      <button onClick={()=>setCount(count+1)}>Click me</button>


      <h1>data{data}</h1>
      <button onClick={()=>setData(data+1)}>Click me</button> */}
    </div>
  )
}

export default UseMemo




