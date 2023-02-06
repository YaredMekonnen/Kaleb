import './App.css';
import Employees from './components/Employees'

function App() {
  console.log("we are entering the employees to the console")
  const showEmployees = true;
  return (
    <div className="App"> 
    {showEmployees ? (<Employees />):
    (<>
    <p>You ain't getting No employees :\</p>
    </>)}
      
    </div>
  );
}

export default App;
