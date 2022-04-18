import React from 'react'

const InformacionClima = props => {

    console.log(props);
    let urlIcono = "http://openweathermap.org/img/w/" + props.icon + ".png";
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>props.error</p>
                </div>
            }
            {props.temperatura ?
                <div className="card card-body">
                    <p> Ubicacion:{props.ciudad},{props.estado}</p>
                    <p> Humedad:  {props.humedad}%</p>
                    <p> Temperatura: {props.temperatura}&deg;C, {props.descripcion}</p>
                    <p> Viento: {props.viento}</p>
                    <p><img id="wicon" src={urlIcono} alt="Weather icon" /></p>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default InformacionClima;