import React from 'react';
import { Link } from 'react-router-dom';


const AgrupacionesListaVista = ({
	agrupaciones
}) => {
	let agrupacionesElems = agrupaciones.map((f, i) => {
		return (
			<article key={i}>
				<Link to={`/agrupaciones/${f._id}`}>
					<h2>
						{ f.nombreOriginario }
					</h2>
					<h4>
						{ f.nombreCastellanizado }
					</h4>
					<p>
						#variantes: { f.variantesIds.length }
					</p>
					<p>f: { f.familia.nombreOriginario } </p>
				</Link>
			</article>
		)
	})
	return <ul className="FamiliaLista">
		{ agrupacionesElems }
	</ul>
}

export default AgrupacionesListaVista;