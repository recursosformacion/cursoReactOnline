import React, { useState } from 'react'

import ListaArticulos from './ListaArticulos';
import ListaCarro from './ListaCarro';

export default function Pedido() {
    const [carro, setCarro] = useState([]);
    const [total, setTotal] = useState(0);
    const [carroVisible, verCarro] = useState(false);
    
    const addCarro = (reg) => {
        setCarro(carro.concat(reg))
        setTotal(total + parseInt(reg.price))
    }
    const subCarro = (reg) => {
        setCarro(carro.filter((cur) => cur.name !== reg.name))
        setTotal(total - parseInt(reg.price))
    }
    
    


    let cant = carro.length;
 
    return (
        <div>
            Articulos en carro = <strong>{ cant } </strong>, importe = <strong>{ total }</strong>
            <div style={ { display: 'inline-block', width: '10em', textAlign: 'center' } }>
                <button onClick={ () => verCarro(!carroVisible) }>Ver Carro</button>
            </div>
            <ul style={ { listStyleType: 'none' } }>
                <li>
                    <span style={ { width: '45%' } }> <ListaArticulos addCarro={ addCarro } /></span>
                    <span style={ { width: '45%' } }> { carroVisible ? <ListaCarro carro={ carro } subCarro={ subCarro } /> : null }</span>
                </li>
            </ul>

        </div>
    )
}
