import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handle=()=>{
    navigate("/products", { replace: true }); // replace the current location in the history stack
    // navigate("/about"); // push a new location to the history stack
    // navigate("/about", { state: { title: "New Page" } }); // pass data to the new page
  }

  return (
    <div>



{/* build a dynamic navigation */}

<NavLink to="/">Home</NavLink>
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
<NavLink to="/pro">progessbar
</NavLink>
    </div>
  )
}

export default Home
