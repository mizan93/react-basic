import React, { useReducer } from "react";

function ReduserCounter1() {
  const initialState ={
      value:0, 
      value2:10
    };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
            value:state.value+action.value
        };
      case "decrement":
        return {
            value:state.value-action.value
        };
      case "incrementby5":
        return {
          value2:state.value2+action.value
        };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count : {count.value}</h2>
      <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      <button onClick={()=>dispatch({type:'incrementby5',value:5})}>Incrementby5</button>
    </div>
  );
}

export default ReduserCounter1;
