import './App.css';
import Employee from './components/employee.js'
import { useState } from 'react';

function App() {
  console.log("What a day to learn with caleb")
  const showEmployee = true;
  const [role, setrole] = useState('dev')
  const [yrole,setyrole] = useState('CEO')
  return (
    <div className="App"> 
     {showEmployee ? (
      <>
     <input type = 'text' onChange={(e)=> setrole(e.target.value)}/>


      <Employee name= "Haile" role ="friend" />
      <Employee name= "Mekdi" role = {role}/>
    <input type = 'text' onChange ={(e)=> setyrole(e.target.value) }/>
      <Employee name = "Yared" role={yrole} />
      </>
     ):(
      <>
      <p>You ain't seeing no goddamn employees</p></>
     )}
    </div>
  );
}

export default App;
