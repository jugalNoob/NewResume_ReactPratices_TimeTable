import React, { useCallback, useState } from 'react';

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // Memoize the increment function with useCallback
  const Incr = useCallback(() => {

    console.log("incr")

    setCount((prevCount) => prevCount + 1);
  }, []);

  // Memoize the decrement function with useCallback
  const Decr = useCallback(() => {
    console.log("Decrement")
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <br />
      <button onClick={Incr}>Increment</button>
      <button onClick={Decr}>Decrement</button>
    </div>
  );
}

export default UseCallbackExample;


// Second exmaple  -------------------------------------->>

// import React, { useState, useCallback } from 'react';

// // Child component that receives increment and decrement functions as props
// const CounterControls = React.memo(({ onIncrement, onDecrement }) => {
//   console.log("Child Component Rendered");

//   return (
//     <div>
//       <button onClick={onIncrement}>Increment</button>
//       <button onClick={onDecrement}>Decrement</button>
//     </div>
//   );
// });

// function UseCallbackExampleWithChild() {
//   const [count, setCount] = useState(0);

//   // Memoize the increment function with useCallback
//   const Incr = useCallback(() => {
//     console.log("Increment in parent");
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   // Memoize the decrement function with useCallback
//   const Decr = useCallback(() => {
//     console.log("Decrement in parent");
//     setCount((prevCount) => prevCount - 1);
//   }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <br />
//       {/* Pass the memoized functions as props to the child component */}
//       <CounterControls onIncrement={Incr} onDecrement={Decr} />
//     </div>
//   );
// }

// export default UseCallbackExampleWithChild;
