import React from 'react';


const FamiliaResumenVista = ({
    id,
    nombreFamilia
}) => (
    <article class="FamiliaResumen">
        <a href="#">
            <h4>
                { nombreFamilia }
            </h4>
        </a>
    </article>
)

export default FamiliaResumenVista;