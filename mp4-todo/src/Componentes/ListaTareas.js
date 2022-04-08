import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Checkbox from './Checkbox';

export default class ListaTareas extends Component {
    static propTypes = { propietario: PropTypes.string.isRequired }

    onClickRemoveItem = e => {
        const updateList = this.props.lista.filter(item => !item.done);
        this.props.setList(updateList);
    };
    onChangeStatus = e => {      
        const { name, checked } = e.target;
        console.log( name,checked )
        const updateList = this.props.lista.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        this.props.setList(updateList);
        console.log(updateList)
    };



    render() {
        const chk = this.props.lista.map(item => (
            <Checkbox key={ item.id } data={ item } onChange={ this.onChangeStatus } />
        ));
        let ntareas = this.props.lista.length;


        return (
            <div>
                { ntareas > 0 ?
                    <div>
                        <p>
                            <button  onClick={ this.onClickRemoveItem }>
                                Borrar todas las tareas
                            </button>
                        </p>
                        { chk }
                    </div>
                    : "No hay tareas" }

            </div>
        )
    }
}

