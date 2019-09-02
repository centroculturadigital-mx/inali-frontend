import gql from "graphql-tag";


export default gql`

query AGRUPACION (
		$_id: MongoID!
) {
  AgrupacionById (_id: $_id) {
    nombreOriginario
    nombreCastellanizado
    variantesIds
    variantes {
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