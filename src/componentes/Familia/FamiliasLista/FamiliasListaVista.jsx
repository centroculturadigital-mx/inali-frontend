import React from 'react';

import style from './FamiliasLista.scss';
import FamiliaResumen from '../FamiliaResumen/FamiliaResumen';

const FamiliasListaVista = ({Familias}) => {
    
    let FamiliasMostrar = Familias.map(u => (
        <FamiliaResumen {...u}/>
    ))

    return (
        <ul className="FamiliasLista">
            { FamiliasMostrar }
        </ul>
    )

}

export default FamiliasListaVista;