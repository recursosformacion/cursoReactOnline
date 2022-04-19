

export default function Listado(props) {

    let estNom = { display: 'inline-block', width: '10em' };
    let estDes = { display: 'inline-block', width: '15em' };
    let estPre = { display: 'inline-block', width: '5em', textAlign: 'right' };
    let estBot = { display: 'inline-block', width: '5em', textAlign: 'center' };


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
                        <span style={ estBot } ><button onClick={ () => props.onClick(reg) }  >{ props.simbolo } </button></span>
                    </li>

                )
            }) :
                <li>No hay registros</li>
            }

        </ul>


    )




}