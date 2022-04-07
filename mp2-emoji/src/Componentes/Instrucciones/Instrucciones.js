import React, { Component } from 'react'
import emoji from './imagenes/Twemoji.png'

export default class Instrucciones extends Component {
  render() {
    return (
      <>
        <img alt="Dibujando en pantalla" src={ emoji } />
        <p>Solo tenemos que pulsar en un icono</p>
      </>
    )
  }
}
