import React, {Component} from 'react'
import TextoAnimado from './TextoAnimado/TextoAnimado'
import {puntosALineas, puntosACurvas} from '../../funciones/svg/svg'

export default (props) => {

  const puntos = [[5, 10],
    [10, 40],
    [40, 30],
    [60, 5],
    [5, 10],
    [10, 40],
    [90, 45],
    [120, 10],
    [150, 45],
    [200, 10],
    [90, 45],
    [120, 10]
  ]
  const lineas = puntosALineas(puntos)
  const curvas = puntosACurvas(puntos)
   // const path = puntosXYaComandosSVG(puntos,true,false)
  return (
    <section className="Tablero">
      <svg viewBox="0 0 500 500">
        <TextoAnimado texto="Hola amigoooos" camino='M100,250 C100,100 400,100 400,250'/>
        {/*
          <TextoAnimado texto="Hola amigoooos" camino={curvas}/>
          <TextoAnimado texto="Hola amigoooos" camino={lineas}/>
        */}
      </svg>
    </section>
  )
}
