import React, { Component } from 'react'

export default class Formulario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre: null,
      situ: false
    }
  }
  limpia = () => this.setState({ situ: false });
  muestra = () => this.setState ({situ:true})

  procesaInput = e => {
    console.log(e.target.value)
    this.setState ({nombre:e.target.value})
 }

  render() {
    return (
      
        this.state.situ ?
          <div>Hola { this.state.nombre }
            <button onClick={ this.limpia }>Limpiar</button>
          </div>
          :
          <div>
            <input type="text" onChange={ this.procesaInput }  />
            <button onClick={ this.muestra } >Enviar</button>
          </div>
      )
  }
}
