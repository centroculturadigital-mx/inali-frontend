import React from 'react';

import style from './FamiliaResumen.scss';

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