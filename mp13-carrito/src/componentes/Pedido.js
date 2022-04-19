import React, { useState } from 'react'
import { connect } from 'react-redux';

import ListaArticulos from './ListaArticulos';
import ListaCarro from './ListaCarro';


const select = state => {
    console.log('lista', state.articulos)
    return { carro: state.articulos,
            total: state.total };
  };

function PedidoF(props) {

    const [carroVisible, verCarro] = useState(false);
    
    let cant = props.carro.length;
 
    return (
        <div>
            Articulos en carro = <strong>{ cant } </strong>, importe = <strong>{ props.total }</strong>
            <div style={ { display: 'inline-block', width: '10em', textAlign: 'center' } }>
                <button onClick={ () => verCarro(!carroVisible) }>Ver Carro</button>
            </div>
            <ul style={ { listStyleType: 'none' } }>
                <li>
                    <span style={ { width: '45%' } }> <ListaArticulos  /></span>
                    <span style={ { width: '45%' } }> { carroVisible ? <ListaCarro /> : null }</span>
                </li>
            </ul>

        </div>
    )
}
const Pedido = connect(select)(PedidoF);
export default Pedido;
