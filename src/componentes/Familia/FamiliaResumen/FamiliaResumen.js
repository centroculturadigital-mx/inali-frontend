import React from 'react'
import { Link } from 'react-router-dom'
import FamiliaResumenVista from './FamiliaResumenVista';



class FamiliaResumen extends React.Component {

    render() {

        return <FamiliaResumenVista {...this.props}/>

    }

}

export default FamiliaResumen;