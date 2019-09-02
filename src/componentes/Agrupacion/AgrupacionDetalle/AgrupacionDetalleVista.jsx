import React from 'react';
import { Link } from 'react-router-dom';

const AgrupacionDetalleVista = ({
	_id,
	nombreOriginario,
	nombreCastellanizado,
	variantes,
	familia
}) => {
	
	let variantesElems = variantes.map((v, i) => {

		return <article key={i}>
			<Link to={`/variantes/${v._id}`}>
				{ v.nombreOriginario } - { nombreCastellanizado }
			</Link>
		</article>

	})

	return (

		<div className="AgrupacionDetalle">
			{ nombreOriginario } - { nombreCastellanizado }
			<div>
				familia: <Link to={`/familias/${familia._id}`}> { familia.nombreOriginario } </Link>
			</div>
			<dir>variantes:</dir>
			<ul>
				{ variantesElems }
			</ul>
		</div>

	)

}

export default AgrupacionDetalleVista;