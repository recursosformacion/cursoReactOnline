
import { ADD_ARTICULO, SUB_ARTICULO, CLEAR_CARRO } from './constantes';

export function addCarro(reg)  {
    return {
        type:ADD_ARTICULO,
        payload: reg
    }
}

export const subCarro = (reg) => {
    return {
        type:SUB_ARTICULO,
        payload: reg
    }
}

export const clearCarro = () => {
    return {
        type:CLEAR_CARRO
        
    }
}