import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Titulo extends Component {
  static propTypes = {titulo:PropTypes.string,
                      propietario:PropTypes.string.isRequired}

  render() {
    let { titulo, propietario } = this.props;
    return (
        <div>{ titulo + ' ' + propietario }</div>
    )
  }
}
Titulo.defaultProps = {
    titulo: 'Las tareas de '
};
