import React from 'react';


import FamiliaResumen from '../FamiliaResumen/FamiliaResumen';

const FamiliaDetalleVista = ({Familias}) => {
    
    let FamiliasMostrar = Familias.map(u => (
        <FamiliaResumen {...u}/>
    ))

    return (
        <ul className="FamiliaDetalle">
            { FamiliasMostrar }
        </ul>
    )

}

export default FamiliaDetalleVista;