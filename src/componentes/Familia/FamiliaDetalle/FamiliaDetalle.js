import React from 'react'
import FamiliaDetalleVista from './FamiliaDetalleVista'
import Familia from '../../../funciones/graphql/FAMILIA'
import { Query } from 'react-apollo'



class FamiliaDetalle extends React.Component {

	render() {

		return ( 

			<Query query={Familia} variables={{_id: this.props.match.params.id}}>

				{
					({loading,error,data}) => {

						if (loading) return <div> Loading... </div>

						if (error) return <div> Error! </div>

						if (!!data) {
							console.log('data', data)
							return <FamiliaDetalleVista {...data.FamiliaById}/>

						}

					}
				}

			</Query>

		)


	}

}

export default FamiliaDetalle