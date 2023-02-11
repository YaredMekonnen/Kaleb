import './index.css';
import Employee from './components/employee'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Addemployee from './components/addemployee';

function App() {
console.log("You Know What we doing")
const showEmployee = true
const [employees,setemployess] = useState([
  {
    id:1,
    name:'Yared',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {id:2,
    name:'Yare',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {id:3,
    name:'Yar',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {id:4,
    name:'Ya',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },
  {id:5,
    name:'Y',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  },{id:6,
    name:'Yada',
    role:'CEO',
    img:'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
  }
])

function updateEmployee(id,newName,newRole){
   const updated = employees.map(employee=>{
    if(id === employee.id){
      return{...employee,name:newName,role:newRole}
    }
    return employee;
   })
   setemployess(updated);
}


function addEmployee(name,role,img){
 const newemployee = {
  id: uuidv4(),
  name: name,
  role: role,
  img: img
 }

setemployess([...employees,newemployee])

}
  return (
    <div className="App">
     {showEmployee ? (
     <>
     <div className='flex flex-wrap justify-center'>
        {employees.map((employee)=>{
          return(<Employee key={employee.id}
                           id={employee.id}
                           name={employee.name} 
                           role={employee.role} 
                           img={employee.img}
                           updateEmployee={updateEmployee}/>)

        })}
        {console.log(uuidv4())}
      </div>
      <Addemployee addEmployee={addEmployee}/>
      </>
     ):"You ain't seeing no employee"}
    </div>
  );
}

export default App;
