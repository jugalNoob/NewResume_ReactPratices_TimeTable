import React, { createContext, useEffect, useState } from 'react';

export const MyChanging = createContext();

function Dark({ children }) {
  const [check, setCheck] = useState(); // Changed to boolean

  const Clicked = () => {
    setCheck(!check); // Toggle boolean value
  };

  useEffect(() => {
    // You can do something here when `check` changes
  }, [check]);

  return (
    <div>
      <button onClick={Clicked}>
        {check ? 'Hide' : 'Show'}
      </button>
      <h1 style={{ color: check ? 'red' : 'black', backgroundColor: check ? 'black' : 'red' }}>jugal</h1>
      <MyChanging.Provider value={check}>
        {children}
      </MyChanging.Provider>
    </div>
  );
}

export default Dark;