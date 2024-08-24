||It is a hook is used for state  managemet
||use Sate is built useing useReducer
||


////UseReducer|||||||||||||||||||||||||||||||||||

    import React, { useReducer } from 'react'
const reducer=(state , action)=>{

  if(action.type=== "INC"){

    return state + 2;
  }else if(action.type ==="DEC"){

    return state -2;
  }else if(action.type ==="MUL"){

    return state *2;
  }

  // console.log(state , action)
  return state
}
function App() {
  const [state, dispatch]=useReducer(reducer , 0)
  return (
    <div>

<h1>{state}</h1>
      <button onClick={()=>dispatch({type:"INC"})}>increment</button>
      <br />
      <br />
      <button onClick={()=>dispatch ({type:"DEC"})}>dencrement</button>
      <br />
      <br />      
      <button onClick={()=>dispatch({type:"MUL"})}>multiply</button>
    </div>
  )
}

export default App


import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return state + action.payload;
    case 'DEC':
      return state - action.payload;
    case 'MUL':
      return state * action.payload;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'INC', payload: 2 })}>increment by 2</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'DEC', payload: 2 })}>decrement by 2</button>
      <br />
      <br />      
      <button onClick={() => dispatch({ type: 'MUL', payload: 2 })}>multiply by 2</button>
    </div>
  );
}

export default App;