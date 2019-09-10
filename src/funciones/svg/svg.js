
const dePuntoALinea (punto, i, a) => `L ${punto[0]} ${punto[1]}`


const puntosXYaComandosSVG = (puntos, command = dePuntoALinea) => {
    return puntos.reduce((acc, punto, i, a) => {
        return (
          i === 0
            ? `M ${punto[0]},${punto[1]}`
            : `${acc} ${command(punto, i, a)}`
        )
      }, '')
}

const puntosALineas = (puntos) => {
  return puntosXYaComandosSVG(puntos, dePuntoALinea)
}

const puntosACurvas = (puntos) => {
  return puntosXYaComandosSVG(puntos, dePuntoACurva)
}

export {
  puntosALineas,
  // puntosACurvas
}
