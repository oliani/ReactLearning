import './App.css';
import Person from './components/Person';


function App() {
  const img = 'https://via.placeholder.com/150'
  const name = 'Zeca'
  const age = 18
  const prof = 'worker'


  return (
    <div className="App">
      <h1>Testando cor do CSS</h1>
      <Person name = {name} img = {img} job = {prof} age = {age}/>
    </div>
  );
}

export default App;
