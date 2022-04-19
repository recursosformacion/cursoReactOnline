

import { ADD_ARTICULO, SUB_ARTICULO, CLEAR_CARRO } from './constantes';

export const appReducer = (state = { articulos: [], total: 0 }, action) => {


    let losArticulos = JSON.parse(JSON.stringify(state.articulos));
    let total = state.total;
    let reg = action.payload;

    switch (action.type) {
        case ADD_ARTICULO:
            losArticulos.push(reg);
            total += parseInt(reg.price);
            break;

        case SUB_ARTICULO:
            losArticulos = losArticulos.filter((cur) => cur.name !== reg.name);
            total -= parseInt(reg.price);
            break;

        case CLEAR_CARRO:
            losArticulos = [];
            total = 0
            break;

        default:
            return state;
    }
    return Object.assign( {}, state, { articulos: losArticulos, total: total } );
}
