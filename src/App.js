import React from 'react';
import { Switch, Route, Link  } from "react-router-dom";
import './App.css';
import FamiliasLista from './componentes/Familia/FamiliasLista/FamiliasLista';
import FamiliaDetalle from './componentes/Familia/FamiliaDetalle/FamiliaDetalle';
import AgrupacionesLista from './componentes/Agrupacion/AgrupacionesLista/AgrupacionesLista';
import AgrupacionDetalle from './componentes/Agrupacion/AgrupacionDetalle/AgrupacionDetalle';
import VariantesLista from './componentes/Variante/VariantesLista/VariantesLista';
import VarianteDetalle from './componentes/Variante/VarianteDetalle/VarianteDetalle';
//
import Audio from './componentes/Audio/Audio'
import Tablero from './componentes/Tablero/Tablero'

const App = () => {

  return (
    <div className="App">
      <header style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/familias">Familias</Link>
        <Link to="/agrupaciones">Agrupaciones</Link>
        <Link to="/variantes">Variantes</Link>
        <Link to="/audio">Audio Demo</Link>
        <Link to="/tablero">Tablero</Link>
      </header>
      <Switch>
        <Route path="/familias/:id" component={FamiliaDetalle}/>
        <Route path="/familias" component={FamiliasLista}/>
        <Route path="/agrupaciones/:id" component={AgrupacionDetalle}/>
        <Route path="/agrupaciones" component={AgrupacionesLista}/>
        <Route path="/variantes/:id" component={VarianteDetalle}/>
        <Route path="/variantes" component={VariantesLista}/>
        <Route path="/audio" component={Audio}/>
        <Route path="/tablero" component={Tablero}/>
      </Switch>
    </div>
  );
}

export default App;
