import React from 'react';
import { Link } from 'react-router-dom';


const VariantesListaVista = ({
	variantes
}) => {
	let variantesElems = variantes.map((f, i) => {
		return (
			<article key={i}>
				<Link to={`/variantes/${f._id}`}>
					<h2>
						{ f.nombreOriginario }
					</h2>
					<h4>
						{ f.nombreCastellanizado }
					</h4>
					<p>
						f: { f.familia.nombreOriginario }
					</p>
					<p>
						a: { f.agrupacion.nombreOriginario }
					</p>
				</Link>
			</article>
		)
	})
	return <ul className="FamiliaLista">
		{ variantesElems }
	</ul>
}

export default VariantesListaVista;