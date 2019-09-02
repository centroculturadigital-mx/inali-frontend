import gql from "graphql-tag";


export default gql`

{
  VarianteMany {
    _id
    nombreOriginario
    nombreCastellanizado
    agrupacion {
      nombreOriginario
    	nombreCastellanizado
    }
    familia {
      nombreOriginario
    	nombreCastellanizado
    }
  }
}

`