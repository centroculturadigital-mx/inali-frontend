import gql from "graphql-tag";


export default gql`

query FAMILIA (
		$_id: MongoID!
) {
  FamiliaById (_id: $_id) {
    nombreOriginario
    nombreCastellanizado
    agrupaciones {
			_id
      nombreOriginario
    	nombreCastellanizado
    }
  }
}

`