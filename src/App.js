import logo from './logo.svg';
import './App.css';
import Info from './pages/Info';
import Home from './pages/Home';
import Details from './pages/Details';
import People from './pages/People';
import ToDo from './pages/ToDo';
import ReduxDemo from './ReduxDemo';
import { Routes, Link, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Router Demo</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/details">Details</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/todo">ToDo</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info counter={props.counterValue}/>} />
          <Route path="/details" element={<ReduxDemo 
              value={props.reduxStore.getState()}
              onDouble={()=>{props.reduxStore.dispatch({ type: 'DOUBLE' })}}
              onTriple={()=>{props.reduxStore.dispatch({ type: 'TRIPLE' })}}
              onHalf={()=>{props.reduxStore.dispatch({ type: 'HALF' })}}
              onAdd={()=>{props.reduxStore.dispatch({ type: 'ADD' })}} 
              onSubtract={()=>{props.reduxStore.dispatch({ type: 'SUBTRACT' })}} />} />
          <Route path="/people" element={<People />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
