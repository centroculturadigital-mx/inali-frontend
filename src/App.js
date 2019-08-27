import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import FamiliasLista from './componentes/Familia/FamiliasLista/FamiliasLista';


const App = () => {

  return (
    <div className="App">

      <FamiliasLista />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
