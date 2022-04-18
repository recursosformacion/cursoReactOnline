import React, { Component } from 'react';import MontaPoster  from './MontaPoster';
import { Grid, Cell } from 'react-foundation';

export default class PresentaPelis extends Component {


  render() {
    const lista = this.props.lista;
    return (
      <Grid className='display'>
        { lista.map(pelicula => (
          <Cell small={ 2 } key={ pelicula.imdbID } >
            <MontaPoster linea={ pelicula } />
          </Cell>
        )) }
      </Grid> 
    )
  }
}