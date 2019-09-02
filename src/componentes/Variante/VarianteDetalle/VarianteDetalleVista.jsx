import React from 'react';
import { Link } from 'react-router-dom';

const VarianteDetalleVista = ({
	_id,
	nombreOriginario,
	nombreCastellanizado,
	familia,
	agrupacion
}) => {

	return (

		<div className="VarianteDetalle">
			{ nombreOriginario } - { nombreCastellanizado }
			<div>
				familia: <Link to={`/familias/${familia._id}`}> { familia.nombreOriginario } </Link>
			</div>
			<div>
				agrupacion: <Link to={`/agrupaciones/${agrupacion._id}`}> { agrupacion.nombreOriginario } </Link>
			</div>
		</div>

	)

}

export default VarianteDetalleVista;