import React from 'react'
import Listado from './Listado';
import { lista} from './servicios/AccesoApi';

export default function ListaArticulos(props) {

  const miLista = lista();

  return (
    <div>
      <h2>Articulos disponibles</h2>
      <Listado miLista={ miLista } onClick={ props.addCarro } simbolo="+" />
    </div>

  )

}
