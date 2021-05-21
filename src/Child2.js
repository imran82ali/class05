import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import numReducer from './numReducer';

 function Child2() {
    let [state,dispatch] = useReducer(numReducer,22);
    return (
    <div >
      Child2 Number {state}
      <button onClick={()=>{dispatch({type:"INCREMENT",val:2}); }} >Increment </button>
      <button onClick={()=>{dispatch({type:"DECREMENT",val:2}); }} >Decrement </button>
      
      {/* <button onClick={()=>{dispatch({type:"INCREMENT"}); }} >Increment </button> */}
      {/* <button onClick={()=>{dispatch({type:"DECREMENT"}); }} >Decrement </button> */}
    
    </div>
  );
}

export default Child2;
