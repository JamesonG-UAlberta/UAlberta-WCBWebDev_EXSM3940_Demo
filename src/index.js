import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { createStore } from 'redux';
import ReduxDemo from './ReduxDemo';
import reduxDemo from './reducers';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> demo-02-router

// createStore() is the old (deprecated, but simple) way to create a store.
const store = createStore(reduxDemo);
const root = ReactDOM.createRoot(document.getElementById('root'));


// store.getState() allows you to get the state of a given store (in this case we have the one).
// When we want to modify the state, we can do so by invoking dispatch() on the store, and passing an anonymous object with a type as outlined in the reducer specification. (In this case, DOUBLE, TRIPLE, HALF, or ADD)
function renderListener() {
  root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <ReduxDemo 
      value={store.getState()}
      onDouble={()=>{store.dispatch({ type: 'DOUBLE' })}}
      onTriple={()=>{store.dispatch({ type: 'TRIPLE' })}}
      onHalf={()=>{store.dispatch({ type: 'HALF' })}}
      onAdd={()=>{store.dispatch({ type: 'ADD' })}} 
      onSubtract={()=>{store.dispatch({ type: 'SUBTRACT' })}} />
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> demo-02-router
  </React.StrictMode>
);
  }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

renderListener();
store.subscribe(renderListener);