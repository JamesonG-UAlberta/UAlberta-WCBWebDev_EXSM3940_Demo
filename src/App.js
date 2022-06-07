import logo from './logo.svg';
import './App.css';
import Info from './pages/Info';
import Home from './pages/Home';
import Details from './pages/Details';
import { Redirect, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Router Demo</h1>
      </header>
    </div>
  );
}

export default App;
