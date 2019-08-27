import React from 'react';


const FamiliasListaVista = ({
    id,
    nombreFamilia
}) => (
    <article class="FamiliaLista">
        <a href="#">
            <h4>
                { nombreFamilia }
            </h4>
        </a>
    </article>
)

export default FamiliasListaVista;