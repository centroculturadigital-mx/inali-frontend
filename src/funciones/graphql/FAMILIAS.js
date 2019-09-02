import gql from "graphql-tag";


export default gql`

{
  FamiliaMany {
    _id
    nombreOriginario
    nombreCastellanizado
    agrupacionesIds
  }
}

`