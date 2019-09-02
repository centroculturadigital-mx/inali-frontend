import React from 'react'
import VariantesListaVista from './VariantesListaVista';
import Variantes from '../../../funciones/graphql/VARIANTES';
import { Query } from 'react-apollo';



class VariantesLista extends React.Component {

	render() {

		return (

			<Query query={Variantes}>

				{({ loading, error, data}) => {

					if (loading) return <div>Loading...</div>

					if (error) return <div>Error!</div>

					if( !! data ) {

						return <VariantesListaVista variantes={data.VarianteMany} />

					}

				}}

			</Query>

		)


	}

}

export default VariantesLista;