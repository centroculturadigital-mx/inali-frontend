import React from 'react'
import AgrupacionDetalleVista from './AgrupacionDetalleVista'
import Agrupacion from '../../../funciones/graphql/AGRUPACION'
import { Query } from 'react-apollo'



class AgrupacionDetalle extends React.Component {

	render() {

		return ( 

			<Query query={Agrupacion} variables={{_id: this.props.match.params.id}}>

				{
					({loading,error,data}) => {

						if (loading) return <div> Loading... </div>

						if (error) return <div> Error! </div>

						if (!!data) {
							console.log('data', data.AgrupacionById)
							return <AgrupacionDetalleVista {...data.AgrupacionById}/>

						}

					}
				}

			</Query>

		)


	}

}

export default AgrupacionDetalle