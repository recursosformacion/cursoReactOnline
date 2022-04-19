
import { connect } from "react-redux";
import { addCarro, subCarro } from './componentesRedux/appActions';

function ListadoF(props) {

    let estNom = { display: 'inline-block', width: '10em' };
    let estDes = { display: 'inline-block', width: '15em' };
    let estPre = { display: 'inline-block', width: '5em', textAlign: 'right' };
    let estBot = { display: 'inline-block', width: '5em', textAlign: 'center' };

    let accion = props.simbolo==='+' ? props.miAddCarro : props.miSubCarro;
    return (
        <ul style={ { listStyleType: 'none' } }>
            <li style={ { fontWeight: 'bold' } }>
                <span style={ estNom } >Nombre</span>
                <span style={ estDes } >Descripcion</span>
                <span style={ estPre } >precio</span>
            </li>

            { props.miLista ? props.miLista.map((reg) => {
                return (
                    <li key={ reg.id }>
                        <span style={ estNom } >{ reg.name }</span>
                        <span style={ estDes } >{ reg.detail }</span>
                        <span style={ estPre } >{ reg.price }</span>
                        <span style={ estBot } ><button onClick={ () => accion(reg) }  >{ props.simbolo } </button></span>
                    </li>

                )
            }) :
                <li>No hay registros</li>
            }

        </ul>


    )




}
const mapDispatchToProps = (dispatch) => {
    return ({
        miAddCarro: (reg) => dispatch(addCarro(reg)),
        miSubCarro: (reg) => dispatch(subCarro(reg)),

    })
}

const Listado = connect(null, mapDispatchToProps)(ListadoF);
export default Listado;