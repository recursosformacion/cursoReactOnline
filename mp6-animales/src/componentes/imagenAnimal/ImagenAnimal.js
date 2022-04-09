import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ANIMALES from '../data/animales.js';


export default class ImagenAnimal extends Component {
    static propTypes = {
        animal: PropTypes.oneOf(['aguila', 'ardilla', 'ballena', 'cocodrilo'])
    }
    static defaultProps = {
        animal: 'cocodrilo'
    }

    constructor(props) {
        super(props);
        this.state = {
            src: ANIMALES[this.props.animal]
        }

    }

    componentWillReceiveProps (nextProps) {
        this.setState({src:ANIMALES[nextProps.animal] })
    }

    render() {
        return (
            <div>
                <p>Esto es un { this.props.animal }</p>
                <img
                    alt={ this.props.animal }
                    src={ this.state.src }
                    width='250'
                />
            </div>
        )
    }

}


