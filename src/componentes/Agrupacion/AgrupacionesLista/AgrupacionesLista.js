import React from 'react'
import AgrupacionesListaVista from './AgrupacionesListaVista';
import Agrupaciones from '../../../funciones/graphql/AGRUPACIONES';
import { Query } from 'react-apollo';



class AgrupacionesLista extends React.Component {

	render() {

		return (

			<Query query={Agrupaciones}>

				{({ loading, error, data}) => {

					if (loading) return <div>Loading...</div>

					if (error) return <div>Error!</div>

					if( !! data ) {

						return <AgrupacionesListaVista agrupaciones={data.AgrupacionMany} />

					}

				}}

			</Query>

		)


	}

}

export default AgrupacionesLista;