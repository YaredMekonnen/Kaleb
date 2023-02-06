import './index.css';
import Employee from './components/employee'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function App() {
console.log("You Know What we doing")
const showEmployee = true
const [yrole,setyrole] = useState("Dev")
const [mrole,setmrole] = useState("wife")
const [employees,setemployess] = useState([
  {
    name:'Yared',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {
    name:'Yare',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {
    name:'Yar',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {
    name:'Ya',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {
    name:'Y',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },{
    name:'Yada',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
])
  return (
    <div className="App">
     {showEmployee ? (
     <>
     <input type='text' onChange={(e)=>setyrole(e.target.value)} />
     <input type='text' onChange={(e)=>setmrole(e.target.value)} />
     <div className='flex flex-wrap justify-center'>
        {employees.map((employee)=>{
          return(<Employee key={uuidv4()}
                           name={employee.name} 
                           role={employee.role} 
                           img={employee.img}/>)

        })}
        {console.log(uuidv4())}
      </div>
      </>
     ):"You ain't seeing no employee"}
    </div>
  );
}

export default App;
