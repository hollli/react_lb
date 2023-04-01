import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div> <h1> Ni hao bracho!</h1>
              <Button variant="primary">Hit me</Button>
          </div>
      </header>
    </div>
  );
}

export default App;
