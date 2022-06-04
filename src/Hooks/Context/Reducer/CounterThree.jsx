import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter:10
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value };
      case 'reset':
        return initialState

        case 'increment2':
          return { ...state, secondCounter:state.secondCounter+action.value}
          case 'decrement2':
            return { ...state, secondCounter:state.secondCounter-action.value}
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <div className="App">
        <h2>First Counter= {count.firstCounter}</h2>
    
        <button
          title="It will Add  1"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment + 1
        </button>
        <button
          title="It will substract 5"
          onClick={() => dispatch({ type: "decrement", value: 5 })}
        >
          decrement - 5
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          increment + 5
        </button>
        <button onClick={()=>dispatch({type:"decrement",value:1})}>Decrement -1</button>
       
        <hr/>
        <h1>second Counter={count.secondCounter}</h1>
        <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment2</button>
        <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement2</button>
        <hr/>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      </div>
    </>
  );
};

export default CounterThree;
