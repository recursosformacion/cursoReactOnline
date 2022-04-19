import React from 'react'
import { connect } from "react-redux";

import Listado from './Listado';

const select = state => {
  return {
    carro: state.articulos
  };
};

function ListaCarroF(props) {
    const miLista = props.carro;
    
    const borde = {
        marginTop: '3em',
        width: 'fit-content',
        padding: '3px 10px',
        border: 'PowderBlue 5px solid',
        borderRadius: '20px'
      }

      
    return (
        <div style={ borde }>
          <h2>Contenido del carro</h2>
          <Listado miLista={ miLista }  simbolo="-" />
        </div >
    
      )


}
const ListaCarro = connect(select)(ListaCarroF);
export default ListaCarro;