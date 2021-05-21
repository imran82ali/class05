import React, { useContext } from 'react';
import ValueContext from './ValueContext';

 function Child(props) {
    let value = useContext(ValueContext);
    return (
    <div >
      Child Number {value[0]}
      <button onClick={()=>{value[1](++value[0])}} > Update Number </button>
    </div>
  );
}

export default Child;
