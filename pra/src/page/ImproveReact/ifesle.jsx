// simple if else statemet 


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState(18);

  useEffect(()=>{
    if (name === 19) {
      setName("jugal");
    } else {
      setName("not error");
    }
  },[])
  return (
    <div>
      <h1>{name && <p>{name}</p>}</h1>
  
    </div>
  );
}

export default App;







// https://mui.com/material-ui/react-progress/
/// if-else with loading animation 
import React, { useCallback } from 'react';
function App() {
  const [ones, setOnes] = useState(false);
  const [isLoaded, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!isLoaded);
  }, []);

  // Move this into a useEffect or an event handler
  useEffect(() => {
    setOnes(!ones);
  }, []);

  const one = useCallback(() => {
    console.log("jugal");
  }, []);

  return (
    <div>
     <Button variant="contained">Hello world</Button>

  
      <h1>kuha</h1>
   
      {isLoaded ? (
        <div>
          <div className="flex gap-4">
            {/* You can add content here */}
          </div>
          {ones ? "true" : "false"}
          {/* Your content here */}
        </div>
      ) : (
        <Box sx={{ display: 'flex' }}>
        <CircularProgress color="secondary" />
      </Box>
      )}
    </div>
  );
}
export default App;






//  is else terional --------------->

    import React from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
      {isLoggedIn ? <WelcomeMessage /> : <LoginPage />}
    </div>
  );
}



/// is else your in return value and  ----------------->>>
import React from 'react';

function Logout() {

    const username = localStorage.getItem('username');
console.log(username); // Outputs: JohnDoe
    // Check if a user is logged in
    if (username) {
        console.log("login: " + username);
        return (
            <>
                <h1>jugal sharma</h1>
            </>
        );
    } else {
        return (
            <>
                <h1>Logout </h1>
            </>
        );
    }
}

export default Logout;


/// ------------>if else with use statement -------------->
import React from 'react';

function App() {
  useCallback(()=>{
    return<>
<h1>jugal sharma</h1>
<h1>{add } i am add</h1>
    </>
  } , [])
  // useEffect re-render Stop  working  
  console.log("jugal sharma re-render")
  useEffect(()=>{
    console.log("jugal sharma effect render" )
  }, [])
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


