import React from 'react'
import { Link } from 'react-router-dom'
import FamiliasListaVista from './FamiliasListaVista';
import Familias from '../../../funciones/graphql/FAMILIAS';
import { Query } from 'react-apollo';



class FamiliasLista extends React.Component {

    render() {

        return (
            <Query query={Familias}>

            {({ loading, error, data}) => {

            if (loading)
                return <div>Loading...</div>

            if (error)
                return <div>Error!</div>
            
            if( !! data ) {
                
                console.log(data);

                return <FamiliasListaVista Familias={data.Familias}/>
                
            }

            }}

        </Query>
        
    )


    }

}

export default FamiliasLista;