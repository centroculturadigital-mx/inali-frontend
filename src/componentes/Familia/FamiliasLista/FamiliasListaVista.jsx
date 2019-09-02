import React from 'react';
import { Link } from 'react-router-dom';


const FamiliasListaVista = ({
	familias
}) => {
	let familiasElems = familias.map((f, i) => {
		return (
			<article key={i}>
				<Link to={`/familias/${f._id}`}>
					<h2>
						{ f.nombreOriginario }
					</h2>
					<h4>
						{ f.nombreCastellanizado }
					</h4>
					<p>
						agrupaciones: { f.agrupacionesIds.length }
					</p>
				</Link>
			</article>
		)
	})
	return <ul className="FamiliaLista">
		{ familiasElems }
	</ul>
}

export default FamiliasListaVista;