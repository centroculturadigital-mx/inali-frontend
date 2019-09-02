import React from 'react';
import { Link } from 'react-router-dom';

const FamiliaDetalleVista = ({
	_id,
	nombreOriginario,
	nombreCastellanizado,
	agrupaciones
}) => {

	let agrupacionesElems = agrupaciones.map((a, i) => {

		return <article key={i}>
			<Link to={`/agrupaciones/${a._id}`}>
				{ a.nombreOriginario } - { nombreCastellanizado }
			</Link>
		</article>

	})

	return (

		<div className="FamiliaDetalle">
			{ nombreOriginario } - { nombreCastellanizado }
			<div>
				agrupaciones: 
			</div>
			<ul>
				{ agrupacionesElems }
			</ul>
		</div>

	)

}

export default FamiliaDetalleVista;