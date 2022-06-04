import React,{useState,useEffect} from 'react';
import axios from  'axios';
import './App.css';

import Search from './Search/Search';
import CounterOne from './Hooks/Context/Reducer/CounterOne';
import CounterTwo from './Hooks/Context/Reducer/CounterTwo';
import CounterThree from './Hooks/Context/Reducer/CounterThree';
import CounterFour from './Hooks/Context/Reducer/CounterFour';

function App() {
const [students, setStudents] = useState([])

      
function getEvents() {
  axios.get(`http://localhost:5000`)
      .then(response => response.data)
      .then((data) => {
          setStudents(data)
      });
}
useEffect(()=>{
  getEvents();
},[])



  return (
<>
<CounterOne/>
<CounterTwo/>
<hr/>
<CounterThree/>
<hr/>
<CounterFour/>


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
