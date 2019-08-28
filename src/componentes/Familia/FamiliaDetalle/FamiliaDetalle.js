import React from 'react'
import { Link } from 'react-router-dom'
import FamiliaDetalleVista from './FamiliaDetalleVista';
import Familia from '../../../funciones/graphql/FAMILIA';
import { Query } from 'react-apollo';



class FamiliaDetalle extends React.Component {

    render() {

        return (
            <h2>Familia detalle</h2>
        //     <Query query={Familias}>

        //     {({ loading, error, data}) => {

        //     if (loading)
        //         return <div>Loading...</div>

        //     if (error)
        //         return <div>Error!</div>
            
        //     if( !! data ) {
                
        //         console.log(data);

        //         return <FamiliaDetalleVista Familias={data.Familias}/>
                
        //     }

        //     }}

        // </Query>
        
    )


    }

}

export default FamiliaDetalle;