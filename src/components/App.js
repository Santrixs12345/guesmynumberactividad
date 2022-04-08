import logo from '../logo.svg';
import logo2 from '../logo2.svg'
import Game from './Game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo2" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo2" alt="logo" />
      </header>
      
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
