import React from 'react'

import { useNavigate, useRouteError } from 'react-router-dom'

function Error() {

    const error=useRouteError()
    console.log(error.status)
    console.log(error.error)
    // if(error.status === 404)
      
  const navigate = useNavigate();
  const handle=()=>{
    navigate("/", { replace: true }); // replace the current location in the history stack
    // navigate("/about"); // push a new location to the history stack
    // navigate("/about", { state: { title: "New Page" } }); // pass data to the new page
  }


 

  return (
    <div>
      <h1>fuck you bitch</h1>
      <button onClick={handle}>clicks</button>
    </div>
  )
}

export default Error
