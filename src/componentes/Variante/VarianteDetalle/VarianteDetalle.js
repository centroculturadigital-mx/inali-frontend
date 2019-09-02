import React from 'react'
import VarianteDetalleVista from './VarianteDetalleVista'
import Variante from '../../../funciones/graphql/VARIANTE'
import { Query } from 'react-apollo'



class VarianteDetalle extends React.Component {

	render() {

		return ( 

			<Query query={Variante} variables={{_id: this.props.match.params.id}}>

				{
					({loading,error,data}) => {

						if (loading) return <div> Loading... </div>

						if (error) return <div> Error! </div>

						if (!!data) {
							console.log('data', data)
							return <VarianteDetalleVista {...data.VarianteById}/>

						}

					}
				}

			</Query>

		)


	}

}

export default VarianteDetalle