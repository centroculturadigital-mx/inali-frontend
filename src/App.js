import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import USUARIOS from './funciones/graphql/USUARIOS';
import UsuariosLista from './componentes/Usuario/UsuariosLista/UsuariosLista';


const App = () => {

  return (
    <div className="App">

      <Query query={USUARIOS}>

        {({ loading, error, data}) => {

          if (loading)
            return <div>Loading...</div>

          if (error)
            return <div>Error!</div>
          
          if( !! data ) {
            
            console.log(data);

            return <UsuariosLista/>
            
          }

        }}

      </Query>

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
