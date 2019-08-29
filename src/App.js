import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import FamiliasLista from './componentes/Familia/FamiliasLista/FamiliasLista';
//
import Audio from './componentes/Audio/Audio'


const App = () => {

  return (
    <div className="App">
      <h1>
        inali-frontend
      </h1>
      <Audio/>
    </div>
  );
}

export default App;
