import './index.css';
import Employee from './components/employee.js'
import { useState } from 'react';

function App() {
console.log("you know how we do")
const showEmployee =true;
const[jrole,setjrole] = useState('not set')
const[mrole,setmrole] = useState('not set')
  return (
    <div className="App bg-red-300"> 
    {showEmployee ? (
      <>
      <Employee name = "Haile" role= "Friend" />
      <input type='text' onChange={(e)=>setjrole(e.target.value)} />
      
      <Employee name = "John" role={jrole}/>
      <input type='text' onChange={(e)=>setmrole(e.target.value)} />
      <Employee name = "Mekdi" role={mrole}/>
      </>
    ):"You ain't getting no employees"}
    </div>
  );
}

export default App;
