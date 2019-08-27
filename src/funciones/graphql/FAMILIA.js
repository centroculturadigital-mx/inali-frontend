import gql from "graphql-tag";


export default gql`

query Familia($entrada:FamiliaEntrada!) {

    Familia(entrada:$entrada) {
        id
        nombreFamilia
    }

}

`