import React from 'react'
import FamiliasListaVista from './FamiliasListaVista';
import Familias from '../../../funciones/graphql/FAMILIAS';
import { Query } from 'react-apollo';



class FamiliasLista extends React.Component {

	render() {

		return (

			<Query query={Familias}>

				{({ loading, error, data}) => {

					if (loading) return <div>Loading...</div>

					if (error) return <div>Error!</div>

					if( !! data ) {

						return <FamiliasListaVista familias={data.FamiliaMany} />

					}

				}}

			</Query>

		)


	}

}

export default FamiliasLista;