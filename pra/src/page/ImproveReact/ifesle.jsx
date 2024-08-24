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







https://mui.com/material-ui/react-progress/


import React, { useCallback, useState, useEffect } from 'react';
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






|||||||||||If Else|||||||||||||||

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



import React from 'react';

function App() {
  const [showElement, setShowElement] = useState(false);

  const handleClick = () => {
    setShowElement(!showElement);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {showElement ? 'Hide Element' : 'Show Element'}
      </button>
      {showElement && <p>This is the element to be shown or hidden.</p>}
    </div>
  );
}