import gql from "graphql-tag";


export default gql`

{
  AgrupacionMany {
    _id
    nombreOriginario
    nombreCastellanizado
    familia {
      _id
      nombreOriginario
    }
    variantesIds
  }
}

`