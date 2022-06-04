import React, { useReducer } from "react";

const initialState = {
  first: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { first: state.first + 1 };
    case "decrement":
      return { first: state.first - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
      <div className="App">
        <h1>Count2 -{count2.first}</h1>

        <button onClick={() => dispatch2({ type: "increment" })}>
          Increment
        </button>
        <button onClick={()=>dispatch2({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch2({type:'reset'})}>Reset</button>
      </div>
    </>
  );
};

export default CounterTwo;
