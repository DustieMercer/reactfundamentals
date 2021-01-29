import './App.css';
import AlumniComponent from './components/Challenges/day02/Contacts'
import State from './components/Challenges/day02/State'

function App() {
  const profile = {name: 'Dustie', age:'34', school: 'EFA', year:"2021"}
  return(
    <div className ='App'>
  <AlumniComponent {...profile} />
  <p>-----------------------</p>
  <State />
      </div>
  );
}

export default App;