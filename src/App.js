import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value = useState(55);
  // let number = useReducer();

  return (
    <ValueContext.Provider value={value}> 
    <div >
      Hello World
      <Parent> </Parent>
      {/* <Parent num={number} > </Parent> */}
      {/* <button onClick={()=>{setNumber(++number)}}>Update Number </button> */}
    </div>
    </ValueContext.Provider>

  );
}

export default App;