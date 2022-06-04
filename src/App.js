import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.css';

import Search from './Search/Search';
import CounterOne from './Hooks/Context/Reducer/CounterOne';
import CounterTwo from './Hooks/Context/Reducer/CounterTwo';
import CounterThree from './Hooks/Context/Reducer/CounterThree';
import CounterFour from './Hooks/Context/Reducer/CounterFour';
import ComponentA from './Hooks/Context/reducer+context/ComponentA';
import ComponentB from './Hooks/Context/reducer+context/ComponentB';
import ComponentC from './Hooks/Context/reducer+context/ComponentC';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }

}

function App() {
  const [students, setStudents] = useState([])
  const [count, dispatch] = useReducer(reducer, initialState)


  function getEvents() {
    axios.get(`http://localhost:5000`)
      .then(response => response.data)
      .then((data) => {
        setStudents(data)
      });
  }
  useEffect(() => {
    getEvents();
  }, [])



  return (
    <>
      {/* <CounterOne/>
<CounterTwo/>
<hr/>
<CounterThree/>
<hr/>
<CounterFour/> */}


      {/* reducer With context */}
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>

        <div className='App'>
          <h1>Count {count}</h1>
          <ComponentA />
          <ComponentB />
          <ComponentC />



        </div>
      </CountContext.Provider>



      {/* <Search/> */}
      {/* 
<h1 style={{textAlign:'center'}}>Student Details</h1>
<table className=" table table-primary">
  <thead>
    <tr>
      <th>Sl.NO</th>
      <th>Name</th>
      <th>Class</th>
      <th>Section</th>
      <th>Age</th>
      <th>Attendence</th>
    </tr>
  </thead>
  <tbody>
    {
      students.map((ele)=>{
        return (
          <tr>
            <td>{ele.SLNO}</td>
            <td>{ele.Name}</td>
            <td>{ele.Class}</td>
            <td>{ele.Section}</td>
            <td>{ele.Age}</td>
            <td>{ele.Attendance}</td>

          </tr>
        )
      })
    }
  </tbody>

</table> */}

    </>
  );
}

export default App;
