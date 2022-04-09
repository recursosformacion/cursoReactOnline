import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Caja extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class Articulo extends Component{

  static propTypes = {
    autor:PropTypes.string.isRequired,
    fecha:PropTypes.string.isRequired
  };
  
  render() {
    return (
      <section>
        <h2>{this.props.titulo}</h2>
        <p><em>Autor: {this.props.autor}</em></p>
        <Caja>{this.props.fecha}</Caja>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
}



function App() {
  return (
    <div className="container">
      <Caja>Hola</Caja>
      <Articulo
        autor='Miguel'
        fecha={ new Date().toLocaleString() }
        titulo="Trabajando con childrens">
        Aqui puedo escribir el articulo que quiero publicar
      </Articulo>
    </div>
  );
}

export default App;
