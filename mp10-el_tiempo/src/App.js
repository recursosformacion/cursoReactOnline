import React, { Component } from 'react';
import './App.css';
import FormularioClima from './componentes/FormularioClima';
import InformacionClima from './componentes/InformacionClima';

import { API_KEY } from './componentes/keys';


class App extends Component {

  state = {
    temperatura: '',
    descripcion: '',
    humedad: '',
    viento: '',
    ciudad: '',
    estado: '',
    icon: "",
    error: null
  }

  getDatos = async e => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    // const WEATHER_FUNCION = "forecast";

    let url = null
    if (cityValue === "") {
      url = await this.getCoordenadas();
    } else {
      url = this.getCiudad(cityValue, countryValue);
    }
    if (url == null) return;
    fetch(url)
      .then((respuesta) => {
        respuesta.json().then(datos => {
          console.log(datos.cod)
          if (datos.cod == '200') {

            //let dir = datos.main.wind.deg;

            this.setState({
              temperatura: datos.main.temp,
              descripcion: datos.weather[0].description,
              humedad: datos.main.humidity,
              viento: datos.wind.speed,
              ciudad: datos.name,
              estado: datos.sys.country,
              icon: datos.weather[0].icon,
              error: null
            })
          } else {
            this.setState({ error: 'Se ha recibido un error ' + datos.cod })
          }
        })
      })

  }


  async getCoordenadas() {

    const WEATHER_FUNCION = "weather";
    if (navigator.geolocation) {
      const position = await this.getCoordinates();
      console.log(position);
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      const url = `http://api.openweathermap.org/data/2.5/${WEATHER_FUNCION}?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`;

      return url;
    }
    else {
      return null;
    }
  }

  getCoordinates() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getCiudad(cityValue, countryValue) {
    const WEATHER_FUNCION = "weather";
    cityValue = cityValue.trim();
    return `http://api.openweathermap.org/data/2.5/${WEATHER_FUNCION}?q=${cityValue},${countryValue}&APPID=${API_KEY}&units=metric`;

  }


  render() {

    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <FormularioClima origen={ this.getDatos } />
            <span>{ this.state.error }</span>
            <InformacionClima { ...this.state } />
          </div>
        </div>
      </div>
    )
  }
}

export default App;