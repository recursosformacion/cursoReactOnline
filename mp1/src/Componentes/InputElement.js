import React, { Component } from 'react'

export class InputElement extends Component {
    render() {
        return (
            <div>
                <label>
                    { this.props.label }
                </label>
                <input className={ this.props.claseCampo }
                    width={ this.props.campoLength }
                    type={ this.props.type }
                    value={ this.props.valor } />
            </div>
        )
    }
}

export default InputElement