import React from 'react'
import Listado from './Listado';

export default function ListaCarro(props) {
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
          <Listado miLista={ miLista } onClick={ props.subCarro } simbolo="-" />
        </div >
    
      )


}
