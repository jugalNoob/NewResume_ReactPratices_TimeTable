import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {




  //pass id in Routing In Ract  how to het id fro, url ion react.js
let id="jugal hsrma"
let value=`/pro/${id}`
console.log(id)





// Navigate useNavigate 
  const navigate = useNavigate();
  const handle=()=>{
    navigate("/products", { replace: true }); // replace the current location in the history stack
    // navigate("/about"); // push a new location to the history stack
    // navigate("/about", { state: { title: "New Page" } }); // pass data to the new page
  }

  return (
    <div>
{/* build a dynamic navigation */}
<NavLink to={value}>Home</NavLink>
<br />
<NavLink to="/products"
  style={({ isActive}) => {
                      return {
                     color: isActive ? "red" : "inherit",
                      };
                    }}>Product</NavLink>


<button onClick={handle}>clicks</button>
<br />
<br />
<NavLink to={value}>progessbar
</NavLink>
<br />
<NavLink to="/api">api</NavLink>
<br />
<NavLink to="/todo">Todo List</NavLink>
    </div>
  )
}

export default Home
