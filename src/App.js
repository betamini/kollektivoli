import logo from './logo.svg';
import './App.css';

import Washinglist from './components/Washinglist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kollektivoli🧹</h1>
        <Washinglist/>
      </header>
    </div>
  );
}

export default App;
