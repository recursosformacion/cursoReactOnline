import React, { Component } from 'react'

import { Titulo } from './Titulo'
import FormBuscador from './FornBuscador';
import PresentaPelis from './PresentaPelis';

import { Grid, Cell, Button, Colors } from 'react-foundation';

export default class GestorBuscador extends Component {

  state = { resultados: [], buscador: false };

  handleContenido = (resultados) => {
    this.setState({ resultados, buscador: true });
  }
  presentarBusqueda = (resultados) => {
    return this.state.resultados.length === 0
      ? <p> No hay coincidencias</p>
      : <PresentaPelis lista={ this.state.resultados } />
  }
  render() {


    return (
      <div>
        <div style={ { width: '50%', margin: 'auto' } }>
          <Grid className="display">
            <Cell small={ 6 } >
              <Titulo>Buscador de peliculas</Titulo>
              <FormBuscador onResult={ this.handleContenido } />
            </Cell>
          </Grid>
        </div>
        {
          this.state.buscador
            ? this.presentarBusqueda()
            : <div style={ { width: '50%', margin: 'auto' } }>
              <Grid className="display">
                <Cell small={ 6 } >
                  <p> Indique la pelicula a buscar</p>
                </Cell>
              </Grid>
            </div>


        }
      </div>
    )
  }
}

