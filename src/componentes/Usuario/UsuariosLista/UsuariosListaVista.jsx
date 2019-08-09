import React from 'react';

import style from './UsuariosLista.scss';
import UsuarioResumen from '../UsuarioResumen/UsuarioResumen';

const UsuariosListaVista = () => (
    <ul className="UsuariosLista">

        <UsuarioResumen/>
        <UsuarioResumen/>
        <UsuarioResumen/>
        <UsuarioResumen/>
        <UsuarioResumen/>
        <UsuarioResumen/>

    </ul>
)

export default UsuariosListaVista;