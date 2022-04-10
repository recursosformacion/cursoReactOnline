import React from 'react'
import {
    Link
} from 'react-router-dom';


export default function Navegacion() {




    return (
        <ul>
            <li>  <Link to="/">Inicio</Link> </li>
            <li>  <Link to="/about">Sobre nosotros</Link> </li>
        </ul> 
  )
}
