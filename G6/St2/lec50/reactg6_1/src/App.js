import './App.css'
import Person from './Components/Person';

function App() {
  const num =Math.floor(Math.random()*10+1)
  return (
    <div className="App">
      <h1>{num} hello react js</h1>
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
