import React, { Component } from 'react'

export default class Coordenadas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      latitud: null,
      longitud: null,
      off: false
    };
    this.leerCoordenadas = this.leerCoordenadas.bind(this);
    this.cerrar = this.cerrar.bind(this);
  }


  leerCoordenadas() {
    this.geoId = navigator.geolocation.watchPosition(posicion =>
      this.setState({
        longitud: posicion.coords.longitude,
        latitud: posicion.coords.latitude,
        off: false
      })
    )
  }

  cerrar() {
    navigator.geolocation.clearWatch(this.geoId);
    this.setState({
      longitud: null,
      latitud: null,
      off: true
    })

  }


  render() {
    return (
      <div>
        { this.state.latitud == null ? (
          this.state.off
            ? <div><h1>Adios</h1></div>
            : <div>CARGANDO ...</div>
        ) : (
          <div>
            <h2>Latitud: { this.state.latitud }</h2>
            <h2>Longitud: { this.state.longitud }</h2>
          </div>
        ) }

        <button onClick={ this.leerCoordenadas }>Leer</button>
        <button onClick={ this.cerrar }>Cerrar</button>
      </div>
    )
  }
}
