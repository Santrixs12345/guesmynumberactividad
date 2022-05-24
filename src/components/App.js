//import Home from './Home/Home';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import Todo from './Todo/Todo';
import logo from '../Logo.svg';
import logo2 from '../Logo2.svg';
//import Timer from './Pomodoro/Timer';
import Crypto from './Crypto/Crypto';
//import Charthome from './Chart/Charthome';
//import Animation from './Animating/Animation';
//import Numbers from './PureComponent/Numbers';
import Calculator from './Calculator/Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo2" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo2" alt="logo" />
      </header>
      <Content >
        <Calculator/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
