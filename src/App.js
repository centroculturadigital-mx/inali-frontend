import React from 'react';
import logo from './logo.svg';
import { Switch, Route  } from "react-router-dom";
import './App.css';
import { Query } from 'react-apollo';
import FamiliasLista from './componentes/Familia/FamiliasLista/FamiliasLista';
import FamiliaDetalle from './componentes/Familia/FamiliaDetalle/FamiliaDetalle';
//
import Audio from './componentes/Audio/Audio'


const App = () => {

  return (
    <div className="App">
      <h1>
        inali-frontend
      </h1>
      <Switch>
        <Route path="/familias/:id" component={FamiliaDetalle}/>
        <Route path="/familias" component={FamiliasLista}/>
      </Switch>
      <Audio/>
    </div>
  );
}

export default App;
