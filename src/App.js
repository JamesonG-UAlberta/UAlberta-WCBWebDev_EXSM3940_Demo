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
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/details">Details</Link></li>
          </ul>
        </nav>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
