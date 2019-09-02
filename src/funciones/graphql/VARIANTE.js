import gql from "graphql-tag";


export default gql`

query VARIANTE (
		$_id: MongoID!
) {
  VarianteById (_id: $_id) {
    nombreOriginario
    nombreCastellanizado
    agrupacion {
      _id
      nombreOriginario
    	nombreCastellanizado
    }
    familia {
      _id
      nombreOriginario
    	nombreCastellanizado
    }
  }
}

`