import React, { Component } from 'react'
/* obteniendo datos de https://www.coindesk.com/coindesk-api */
const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export default class AccesoAPI extends Component {

    constructor(props){
        super(props);
        this.state = {bpi:{}}
    }

    componentDidMount() {
        this.leerTabla()
    }

    leerTabla = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const {bpi} = data;
                console.log(data);
                this.setState({bpi })
            });
    }

    visualizarCambio = () => {
        const {bpi} = this.state;
        const monedas = Object.keys(bpi);
        return monedas.map(divisa => (
            <div key={divisa}>
            1 BTC es {bpi[divisa].rate}
            &nbsp;
            <span>{bpi[divisa].description}</span>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <h2>Cotizacion bitcoin</h2>
                {this.visualizarCambio()}
            </div>
        )
    }
}
