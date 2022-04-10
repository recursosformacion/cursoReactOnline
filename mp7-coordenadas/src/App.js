import React, { Component } from 'react';
import './App.css';
import Coordenadas from './Componentes/Coordenadas';
import Formulario from './Componentes/Formulario';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verFormulario: false,
      verCoordenadas: false
    }
  }

  formu = () => this.setState({ verFormulario: !this.state.verFormulario })
  coor = () => {this.setState({ verCoordenadas: !this.state.verCoordenadas} )  }

  render() {
    return (
      <div className="App">
        <button onClick={this.formu}>Formulario</button>
        <button onClick={this.coor}>Coordenadas</button>
        {this.state.verFormulario ? <Formulario /> : null}
        {this.state.verCoordenadas ? <Coordenadas /> : null}

      </div>
    );
  }
}

export default App;
